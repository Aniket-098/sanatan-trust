import Booking from "../models/Booking.js";
import Donation from "../models/Donation.js";

export const getDashboard = async (req, res) => {
  try {
    /* ============================================
       BOOKING STATISTICS
    ============================================ */

    const totalBookings = await Booking.countDocuments();

    const pending = await Booking.countDocuments({
      status: "Pending",
    });

    const approved = await Booking.countDocuments({
      status: "Approved",
    });

    const rejected = await Booking.countDocuments({
      status: "Rejected",
    });

    /* ============================================
       RECENT BOOKINGS
    ============================================ */

    const recentBookings = await Booking.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select(
        "bookingId fullName city kathaType status createdAt"
      );

    /* ============================================
       DONATION STATISTICS
    ============================================ */

    const successfulDonations = await Donation.find({
      paymentStatus: "Success",
    });

    const totalDonationAmount =
      successfulDonations.reduce(
        (sum, donation) => sum + donation.amount,
        0
      );

    const totalDonations =
      successfulDonations.length;

    const averageDonation =
      totalDonations === 0
        ? 0
        : Math.round(
            totalDonationAmount /
              totalDonations
          );

    const highestDonation =
      totalDonations === 0
        ? 0
        : Math.max(
            ...successfulDonations.map(
              (donation) =>
                donation.amount
            )
          );

    /* ============================================
       TODAY'S DONATIONS
    ============================================ */

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const todayDonations =
      successfulDonations.filter(
        (donation) =>
          new Date(
            donation.createdAt
          ) >= today
      );

    const todayDonationAmount =
      todayDonations.reduce(
        (sum, donation) =>
          sum + donation.amount,
        0
      );

    /* ============================================
       RECENT DONATIONS
    ============================================ */

    const recentDonations =
      await Donation.find({
        paymentStatus: "Success",
      })
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .select(
          "donorName amount paymentStatus createdAt"
        );

    /* ============================================
       RESPONSE
    ============================================ */

    res.status(200).json({
      success: true,

      stats: {
        // Booking

        totalBookings,

        pending,

        approved,

        rejected,

        // Donation

        totalDonations,

        totalDonationAmount,

        averageDonation,

        highestDonation,

        todayDonationAmount,

        todayDonations:
          todayDonations.length,
      },

      recentBookings,

      recentDonations,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to load dashboard.",
    });

  }
};