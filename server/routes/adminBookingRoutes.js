import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getBookings,
  updateBookingStatus,
  deleteBooking,
  exportBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

// All routes below require authentication
router.use(protect);

// Export Excel
router.get(
  "/export",
  exportBookings
);

// GET /api/v1/admin/bookings
router.get("/", getBookings);

router.patch(
  "/:id/status",
  updateBookingStatus
);

router.delete(
  "/:id",
   deleteBooking
  );

export default router;