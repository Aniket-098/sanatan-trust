import Booking from "../models/Booking.js";
import ExcelJS from "exceljs";
import sendEmail from "../utils/sendEmail.js";
import { bookingEmail } from "../utils/emailTemplates.js";

export const createBooking = async (req, res) => {
  try {
    const { fullName, phone, city, state, kathaType, date } = req.body;

    // Server-side validation
    if (!fullName || !phone || !city || !state || !kathaType || !date) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const bookingId = "KT-" + Date.now().toString().slice(-8);

    const booking = await Booking.create({
      ...req.body,
      bookingId,
    });

    // Send confirmation email

    if (booking.email) {
      try {
        await sendEmail({
          to: booking.email,

          subject: "Booking Confirmation - Sanatan Trust",

          html: bookingEmail({
            name: booking.fullName,

            bookingId: booking.bookingId,

            katha: booking.kathaType,

            date: new Date(booking.date).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }),
          }),
        });
        console.log("Booking email sent.");
      } catch (error) {
        console.error("Email Error:", error.message);
      }
    }

    res.status(201).json({
      success: true,
      message: "Booking submitted successfully.",
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings.",
    });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const { status } = req.body;

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    res.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const exportBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    const workbook = new ExcelJS.Workbook();

    workbook.creator = "Sanatan Trust";

    workbook.created = new Date();

    const worksheet = workbook.addWorksheet("Bookings");

    worksheet.columns = [
      { header: "Booking ID", key: "bookingId", width: 18 },
      { header: "Full Name", key: "fullName", width: 25 },
      { header: "Phone", key: "phone", width: 18 },
      { header: "City", key: "city", width: 18 },
      { header: "State", key: "state", width: 18 },
      { header: "Katha", key: "kathaType", width: 28 },
      { header: "Date", key: "date", width: 18 },
      { header: "Status", key: "status", width: 15 },
    ];

    const headerRow = worksheet.getRow(1);

    headerRow.font = {
      bold: true,
      color: {
        argb: "FFFFFFFF",
      },
    };

    headerRow.alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "1E3A8A",
      },
    };

    headerRow.height = 25;

    bookings.forEach((booking) => {
      const row = worksheet.addRow({
        bookingId: booking.bookingId,

        fullName: booking.fullName,

        phone: booking.phone,

        city: booking.city,

        state: booking.state,

        kathaType: booking.kathaType,

        date: booking.date
          ? new Date(booking.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "",

        status: booking.status,
      });

      row.alignment = {
        vertical: "middle",
      };

      if (row.number % 2 === 0) {
        row.eachCell((cell) => {
          cell.fill = {
            type: "pattern",

            pattern: "solid",

            fgColor: {
              argb: "F8FAFC",
            },
          };
        });
      }

      const statusCell = row.getCell(8);

      statusCell.font = {
        bold: true,
      };

      statusCell.alignment = {
        horizontal: "center",
      };

      if (booking.status === "Approved") {
        statusCell.fill = {
          type: "pattern",

          pattern: "solid",

          fgColor: {
            argb: "C6EFCE",
          },
        };
      } else if (booking.status === "Rejected") {
        statusCell.fill = {
          type: "pattern",

          pattern: "solid",

          fgColor: {
            argb: "FFC7CE",
          },
        };
      } else {
        statusCell.fill = {
          type: "pattern",

          pattern: "solid",

          fgColor: {
            argb: "FFEB9C",
          },
        };
      }
    });

    worksheet.insertRow(1, []);

    worksheet.insertRow(1, []);

    worksheet.insertRow(1, []);

    worksheet.mergeCells("A1:H1");

    worksheet.getCell("A1").value = "SANATAN TRUST";

    worksheet.getCell("A1").font = {
      size: 22,
      bold: true,
    };

    worksheet.getCell("A1").alignment = {
      horizontal: "center",
    };

    worksheet.mergeCells("A2:H2");

    worksheet.getCell("A2").value = "Booking Report";

    worksheet.getCell("A2").font = {
      size: 16,
      bold: true,
    };

    worksheet.getCell("A2").alignment = {
      horizontal: "center",
    };

    worksheet.mergeCells("A3:H3");

    worksheet.getCell("A3").value =
      `Generated on: ${new Date().toLocaleString("en-IN")}`;

    worksheet.getCell("A3").alignment = {
      horizontal: "center",
    };

    worksheet.views = [
      {
        state: "frozen",
        ySplit: 4,
      },
    ];

    worksheet.autoFilter = {
      from: "A4",
      to: "H4",
    };

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="bookings.xlsx"',
    );

    await workbook.xlsx.write(res);

    res.end();
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to export bookings.",
    });
  }
};
