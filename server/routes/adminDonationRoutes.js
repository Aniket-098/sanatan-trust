import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getDonations,
  deleteDonation,
  exportDonations,
  getDonationStats,
} from "../controllers/adminDonationController.js";

const router = express.Router();

router.use(protect);

router.get("/", getDonations);

router.get(
  "/stats",
  getDonationStats
);

router.get("/export", exportDonations);

router.delete("/:id", deleteDonation);

export default router;