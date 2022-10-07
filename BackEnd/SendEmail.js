const nodemailer = require("nodemailer");
const sendEmail = (from, text, name) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let mailOptions = {
    from,
    to: "artlil420@gmail.com",
    subject: "[PORTFOLIO]: from " + name,
    text,
    html: "Name: " + name + "<br> Email: " + from + "<br> Message: " + text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendEmail,
};
