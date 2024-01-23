// emailService.js
const nodemailer = require('nodemailer');
const User = require("../models/User")
function sendWelcomeEmail(email) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_GMAIL,
      pass: process.env.USER_PASS,
    }
  });

  // Setup email data
  const mailOptions = {
    from: 'MrCoder105@gmail.com',
    to: email,
    subject: 'Welcome to Samaritan Technologies',
    text: 'Thank you for registering with Samaritan Technologies. We are excited to have you on board!'
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending welcome email:', error);
    } else {
      console.log('Welcome email sent:', info.response);
    }
  });
}

module.exports = { sendWelcomeEmail };
