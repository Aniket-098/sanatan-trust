import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    general: {
      trustName: {
        type: String,
        default: "Sanatan Trust",
      },

      address: {
        type: String,
        default: "",
      },
    },

    contact: {
      email: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },
    },

    donation: {
      upiId: {
        type: String,
        default: "",
      },

      qrCode: {
        type: String,
        default: "",
      },

      razorpayEnabled: {
        type: Boolean,
        default: true,
      },

      upiEnabled: {
        type: Boolean,
        default: true,
      },
    },

    social: {
      facebook: {
        type: String,
        default: "",
      },

      instagram: {
        type: String,
        default: "",
      },

      youtube: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Settings",
  settingsSchema
);