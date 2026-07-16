import Razorpay from "razorpay";
import crypto from "crypto";
import Donation from "../models/Donation.js";
import sendEmail from "../utils/sendEmail.js";
import { donationEmail } from "../utils/emailTemplates.js";
import createNotification from "../utils/createNotification.js";

export const createOrder = async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid donation amount.",
      });
    }

    const options = {
      amount: amount * 100, // Convert ₹ to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order.",
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,

      donorName,
      email,
      phone,
      purpose,
      amount,
    } = req.body;

    // Generate expected signature

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // Compare signatures

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // Save donation

    const donation = await Donation.create({
      donorName,
      email,
      phone,
      purpose,
      amount,

      razorpayOrderId: razorpay_order_id,

      razorpayPaymentId: razorpay_payment_id,

      razorpaySignature: razorpay_signature,

      paymentStatus: "Success",
    });

    // Send confirmation email

    if (donation.email) {
      try {
        await sendEmail({
          to: donation.email,

          subject: "Donation Successful - Sanatan Trust",

          html: donationEmail({
            name: donation.donorName,

            amount: donation.amount.toLocaleString("en-IN"),

            paymentId: donation.razorpayPaymentId,
          }),
        });
        console.log("Donation email sent.");
      } catch (error) {
        console.error("Email Error:", error.message);
      }
    }

    await createNotification({
      type: "donation",

      title: "New Donation",

      message: `₹${donation.amount.toLocaleString(
        "en-IN",
      )} donated by ${donation.donorName}`,

      link: "/admin/donations",
    });

    return res.status(200).json({
      success: true,
      message: "Donation received successfully.",
      donation: {
        donorName: donation.donorName,
        amount: donation.amount,
        paymentId: donation.razorpayPaymentId,
        paymentStatus: donation.paymentStatus,
        createdAt: donation.createdAt,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Payment verification failed.",
    });
  }
};
