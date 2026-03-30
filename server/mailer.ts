import nodemailer from 'nodemailer'

export function createTransport() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

export async function sendInvitation({
  to,
  guestName,
  inviteUrl,
}: {
  to: string
  guestName: string
  inviteUrl: string
}) {
  const transporter = createTransport()

  await transporter.sendMail({
    from: `"Վահան & Անահիտ" <${process.env.GMAIL_USER}>`,
    to,
    subject: 'Հրավիրվածություն հարսանիքի · 25 Ապրիլ 2026',
    html: `
<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { margin:0; padding:0; background:#fdfcf8; font-family:'Georgia',serif; color:#3a332c; }
    .wrap { max-width:520px; margin:48px auto; padding:48px 40px; background:#fdfcf8; }
    .divider { width:48px; height:1px; background:#c9a97a; margin:24px auto; }
    .label { font-family:Arial,sans-serif; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:#b8975f; }
    .names { font-size:40px; font-weight:300; color:#3a332c; text-align:center; margin:0; line-height:1.2; }
    .amp { font-size:28px; color:#c9a97a; font-style:italic; }
    .body { font-size:18px; line-height:1.8; color:#5a5248; text-align:center; margin:24px 0; }
    .btn { display:inline-block; margin-top:32px; padding:14px 36px; border:1px solid #c9a97a; color:#3a332c; text-decoration:none; font-family:Arial,sans-serif; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; }
    .footer { margin-top:40px; font-family:Arial,sans-serif; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:#c9a97a; text-align:center; }
  </style>
</head>
<body>
<div class="wrap">
  <p class="label" style="text-align:center">Հարգելի ${guestName}</p>
  <div class="divider"></div>
  <p class="names">Վահան</p>
  <p class="names"><span class="amp">&</span></p>
  <p class="names">Անահիտ</p>
  <div class="divider"></div>
  <p class="body">
    Ուրախությամբ հրավիրում ենք ձեզ<br>
    մեր հարսանեկան տոնախմբությանը
  </p>
  <p class="body" style="font-size:14px; letter-spacing:0.1em;">
    25 Ապրիլ 2026 · ժամը 17:00<br>Երևան, Հայաստան
  </p>
  <div style="text-align:center">
    <a href="${inviteUrl}" class="btn">Հաստատել ներկայությունը</a>
  </div>
  <div class="footer" style="margin-top:48px">25 Ապրիլ 2026 · Երևան</div>
</div>
</body>
</html>
    `.trim(),
  })
}
