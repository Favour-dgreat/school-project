const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., use Gmail SMTP
  auth: {
    user: 'adeshinafavour4@gmail.com',
    pass: 'OpenSourcOpenCulture1!', // Consider using an app-specific password
  },
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const mailOptions = {
    from: '"School Portal" <adeshinafavour4@gmail.com>',
    to: user.email,
    subject: 'Welcome to Our Service',
    text: 'Thank you for signing up!',
    html: '<strong>Thank you for signing up!</strong>',
  };

  return transporter.sendMail(mailOptions)
    .then(() => {
      console.log('Email sent successfully to:', user.email);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
});
