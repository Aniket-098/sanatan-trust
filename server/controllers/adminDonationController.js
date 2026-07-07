import Donation from "../models/Donation.js";

import ExcelJS from "exceljs";

/* -----------------------------------------
   GET ALL DONATIONS
----------------------------------------- */

export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: donations.length,
      donations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch donations.",
    });
  }
};

/* -----------------------------------------
   DELETE DONATION
----------------------------------------- */

export const deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(
      req.params.id
    );

    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation not found.",
      });
    }

    await donation.deleteOne();

    res.status(200).json({
      success: true,
      message: "Donation deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete donation.",
    });
  }
};

/* -----------------------------------------
   EXPORT DONATIONS
----------------------------------------- */
export const exportDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({
      createdAt: -1,
    });

    const workbook = new ExcelJS.Workbook();

    const worksheet =
      workbook.addWorksheet("Donations");

    worksheet.columns = [
      {
        header: "Donor Name",
        key: "donorName",
        width: 25,
      },
      {
        header: "Phone",
        key: "phone",
        width: 18,
      },
      {
        header: "Email",
        key: "email",
        width: 30,
      },
      {
        header: "Amount",
        key: "amount",
        width: 15,
      },
      {
        header: "Purpose",
        key: "purpose",
        width: 35,
      },
      {
        header: "Payment ID",
        key: "paymentId",
        width: 28,
      },
      {
        header: "Status",
        key: "status",
        width: 15,
      },
      {
        header: "Date",
        key: "date",
        width: 22,
      },
    ];

    donations.forEach((donation) => {
      worksheet.addRow({
        donorName: donation.donorName,
        phone: donation.phone,
        email: donation.email,
        amount: donation.amount,
        purpose: donation.purpose || "-",
        paymentId:
          donation.razorpayPaymentId,
        status: donation.paymentStatus,
        date: donation.createdAt,
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=donations.xlsx"
    );

    await workbook.xlsx.write(res);

    res.end();

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to export donations.",
    });
  }
};

/* -----------------------------------------
   GET ALL DONATIONS STATS
----------------------------------------- */

export const getDonationStats = async (req, res) => {
  try {
    const donations = await Donation.find({
      paymentStatus: "Success",
    });

    const totalAmount = donations.reduce(
      (sum, donation) => sum + donation.amount,
      0
    );

    const totalDonations = donations.length;

    const averageDonation =
      totalDonations === 0
        ? 0
        : Math.round(totalAmount / totalDonations);

    const highestDonation =
      donations.length > 0
        ? Math.max(
            ...donations.map(
              (donation) => donation.amount
            )
          )
        : 0;

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const todayDonations = donations.filter(
      (donation) =>
        new Date(donation.createdAt) >= today
    );

    const todayAmount = todayDonations.reduce(
      (sum, donation) => sum + donation.amount,
      0
    );

    res.status(200).json({
      success: true,
      stats: {
        totalAmount,
        totalDonations,
        averageDonation,
        highestDonation,
        todayAmount,
        todayDonations:
          todayDonations.length,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch donation statistics.",
    });
  }
};