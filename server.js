const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adeshinafavour4@gmail.com',
        pass: 'OpenSourceOpenCulture1!'
    }
});

app.post('/send-email', (req, res) => {
    const { email, action } = req.body;

    let subject, text;

    if (action === 'signup') {
        subject = 'Welcome to the Student Portal!';
        text = `Thank you for signing up, ${email}! We're excited to have you on board.`;
    } else if (action === 'login') {
        subject = 'Login Alert';
        text = `Hi ${email}, you have successfully logged in. If this wasn't you, please secure your account immediately.`;
    }

    const mailOptions = {
        from: 'test-user@gmail.com',
        to: email,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error });
        }
        res.status(200).json({ success: true, info });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
