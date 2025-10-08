const transporter = require("../config/mail-config.js");

const sendMail = async () => {
  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: "",
      subject: "Test Mail",
      text: `
    Subject: Test mail 😏
    Hey, just testing my code…
    but I think it accidentally sent my feelings too
    `,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.log("the error while sending email check mail service")
    throw error;
    
  }
};

module.exports = sendMail;
