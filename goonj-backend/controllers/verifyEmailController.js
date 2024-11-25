const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
require('dotenv').config();

// In-memory storage for verification tokens (use a database for production)
const verificationTokens = {};

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint to send verification email
exports.sendVerificationEmail = (req, res) => {
  const { email } = req.body;
  const token = uuidv4(); // Generate a unique token
  const expiry = Date.now() + 15 * 60 * 1000; // Token expires in 15 minutes

  // Save the token with the email and expiry (in-memory)
  verificationTokens[token] = { email, expiry };

  // Generate a verification link
  const verificationLink = `http://localhost:3000/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email',
    text: `Click on the following link to verify your email: ${verificationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
      res.status(500).json({ message: "Failed to send verification email." });
    } else {
      res.status(200).json({ message: "Verification email sent!" });
    }
  });
};

// Endpoint to verify the token
exports.verifyEmail = (req, res) => {
  const { token } = req.query;
  const data = verificationTokens[token];

  if (data) {
    const { email, expiry } = data;
    if (Date.now() < expiry) { // Check if token is still valid
      delete verificationTokens[token]; // Token is valid, remove it
      res.status(200).json({ message: "Email verified successfully!" });
    } else {
      delete verificationTokens[token]; // Remove expired token
      res.status(400).json({ message: "Token expired. Please request a new verification email." });
    }
  } else {
    res.status(400).json({ message: "Invalid or expired token." });
  }
};
