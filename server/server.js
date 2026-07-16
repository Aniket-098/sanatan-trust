import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

import settingsRoutes from "./routes/settingsRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminBookingRoutes from "./routes/adminBookingRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import adminDonationRoutes from "./routes/adminDonationRoutes.js";
import publicSettingsRoutes from "./routes/publicSettingsRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();
connectDB();

const app = express();


/* -------------------- Middleware -------------------- */

app.use(cors());

app.use(express.json());

app.use("/api/v1/admin", adminRoutes);

/* -------------------- Routes -------------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Sanatan Trust Backend Running Successfully",
    version: "1.0.0",
  });
});
app.use("/api/bookings", bookingRoutes);

app.use(
  "/api/v1/admin/dashboard",
  dashboardRoutes
);

app.use(
  "/api/v1/admin/bookings",
  adminBookingRoutes
);

app.use(
  "/api/v1/donations",
  donationRoutes
);

app.use(
  "/api/v1/admin/donations",
  adminDonationRoutes
);

app.use(
  "/api/v1/admin/notifications",
  notificationRoutes
);

app.use(
  "/api/v1/admin/settings",
  settingsRoutes
);

app.use(
  "/api/v1/settings",
  publicSettingsRoutes
);

app.use(
  "/api/v1/admin/upload",
  uploadRoutes
);


/* -------------------- Server -------------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running at http://localhost:${PORT}`
  );
});