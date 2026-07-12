import jsPDF from "jspdf";

const generateDonationReceipt = (donation) => {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();

  const center = pageWidth / 2;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(180, 120, 0);
  doc.text("SANATAN TRUST", center, 20, {
    align: "center",
  });

  doc.setFontSize(12);
  doc.setTextColor(90);

  doc.text(
    "Dharma • Seva • Sanskar",
    center,
    28,
    {
      align: "center",
    }
  );

  doc.setDrawColor(220);

  doc.line(20, 35, 190, 35);

  doc.setFontSize(18);

  doc.setTextColor(0);

  doc.text("DONATION RECEIPT", center, 45, {
    align: "center",
  });

  doc.setFontSize(12);

  let y = 60;

  const row = (label, value) => {
    doc.setFont("helvetica", "bold");
    doc.text(label, 20, y);

    doc.setFont("helvetica", "normal");
    doc.text(String(value ?? "-"), 75, y);

    y += 10;
  };

  row(
    "Receipt No",
    donation._id || "-"
  );

  row(
    "Payment ID",
    donation.paymentId
  );

  row(
    "Donor Name",
    donation.donorName
  );

  row(
    "Email",
    donation.email || "-"
  );

  row(
    "Phone",
    donation.phone
  );

  row(
    "Amount",
    `₹ ${Number(
      donation.amount
    ).toLocaleString("en-IN")}`
  );

  row(
    "Purpose",
    donation.purpose || "-"
  );

  row(
    "Status",
    "SUCCESS"
  );

  row(
    "Date",
    new Date(
      donation.createdAt
    ).toLocaleString("en-IN")
  );

  y += 10;

  doc.line(20, y, 190, y);

  y += 15;

  doc.setFontSize(13);

  doc.setFont("helvetica", "bold");

  doc.text(
    "Thank You!",
    center,
    y,
    {
      align: "center",
    }
  );

  y += 12;

  doc.setFont("helvetica", "normal");

  doc.setFontSize(11);

  doc.text(
    "Your contribution helps preserve Sanatan Dharma,",
    center,
    y,
    {
      align: "center",
    }
  );

  y += 7;

  doc.text(
    "support Annadan Seva, Temple Development",
    center,
    y,
    {
      align: "center",
    }
  );

  y += 7;

  doc.text(
    "and charitable initiatives.",
    center,
    y,
    {
      align: "center",
    }
  );

  y += 18;

  doc.setFont("helvetica", "italic");

  doc.text(
    "May Lord Krishna bless you and your family.",
    center,
    y,
    {
      align: "center",
    }
  );

  y += 35;

  doc.line(130, y, 185, y);

  y += 6;

  doc.setFont("helvetica", "normal");

  doc.text(
    "Authorized Signature",
    135,
    y
  );

  doc.save(
    `Donation_Receipt_${donation.paymentId}.pdf`
  );
};

export default generateDonationReceipt;