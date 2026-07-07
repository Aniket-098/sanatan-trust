export const bookingEmail = ({
  name,
  bookingId,
  katha,
  date,
}) => `
<div style="font-family:Arial,sans-serif;background:#f7f7f7;padding:30px">

<div style="max-width:600px;margin:auto;background:white;border-radius:12px;padding:30px">

<h1 style="color:#d97706;text-align:center">
🙏 Sanatan Trust
</h1>

<h2 style="text-align:center">
Booking Confirmation
</h2>

<p>Namaste <b>${name}</b>,</p>

<p>
Thank you for booking a Katha with
<b>Sanatan Trust</b>.
</p>

<hr>

<p><b>Booking ID:</b> ${bookingId}</p>

<p><b>Katha:</b> ${katha}</p>

<p><b>Date:</b> ${date}</p>

<hr>

<p>
Our team will contact you shortly for further coordination.
</p>

<p>
Thank you for your faith and support.
</p>

<p>
Regards,<br>
<b>Sanatan Trust</b>
</p>

</div>

</div>
`;

export const donationEmail = ({
  name,
  amount,
  paymentId,
}) => `
<div style="font-family:Arial,sans-serif;background:#f7f7f7;padding:30px">

<div style="max-width:600px;margin:auto;background:white;border-radius:12px;padding:30px">

<h1 style="color:#d97706;text-align:center">
❤️ Sanatan Trust
</h1>

<h2 style="text-align:center">
Donation Successful
</h2>

<p>Namaste <b>${name}</b>,</p>

<p>
Thank you for your generous contribution.
</p>

<hr>

<p><b>Amount:</b> ₹ ${amount}</p>

<p><b>Payment ID:</b> ${paymentId}</p>

<hr>

<p>
Your contribution supports our spiritual, educational and charitable activities.
</p>

<p>
May God bless you and your family.
</p>

<p>
Regards,<br>
<b>Sanatan Trust</b>
</p>

</div>

</div>
`;