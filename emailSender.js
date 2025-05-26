const nodemailer = require('nodemailer');

// Configure your email (use Gmail or other SMTP service)
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oloostephen20191@gmail.com', // replace with your email
    pass: 'zykz azhd ykdg fopj '     // use App Password or enable "less secure apps"
  }
});

// Mail options
let mailOptions = {
  from: 'oloostephen20191@gmail.com',
  to: 'oloostephen22@gmail.com', 
  subject: 'Hello from Node.js | S.OLOO',
  text: 'This is a test email sent using Node.js and Nodemailer For STEPHEN OLOO.'
};

// Send mail
transporter.sendMail(mailOptions, (err, info) => {
  if (err) return console.log(err);
  console.log('Email sent:', info.response);
});
