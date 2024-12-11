const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(to right, #4CAF50, #45a049);
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      color: white;
      margin: 0;
    }
    .content {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .verification-code {
      text-align: center;
      margin: 30px 0;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #4CAF50;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Verify Your Email</h1>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div class="verification-code">
      {verificationCode}
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

module.exports = { VERIFICATION_EMAIL_TEMPLATE };
