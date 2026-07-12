const paymentConfig = {
  trustName: "Sanatan Trust",

  enableRazorpay: true,

  enableUPI: true,

  upi: {
    id: "YOUR_UPI_ID",

    qr: null, // Replace later with imported QR image

    note:
      "After paying through UPI, you may share the payment screenshot on WhatsApp or Email for acknowledgment.",
  },

  contact: {
    whatsapp: "+91 XXXXXXXXXX",

    email: "trust@example.com",
  },
};

export default paymentConfig;