const transporter = require("../config/mail-config.js");
const ReminderRepository = require("../repository/reminder-repository.js");
const reminderRepository = new ReminderRepository();

const sendMail = async () => {
  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: "aniketh.singh005@gmail.com",
      subject: "Test Mail",
      text: `
    Subject: Test mail 
    Hey, just testing my code…
    but I think it accidentally sent my feelings too
    `,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.log("the error while sending email check mail service");
    throw error;
  }
};

const fetchPendingEmail = async () => {
  try {
    const response = await reminderRepository.get({
      status: "PENDING"
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


const createReminder = async(data)=>{
  try {
    const response = await reminderRepository.createReminder(data)
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const dummyService = async(data)=>{
  try {
    const temp = JSON.parse(data.toString());
    if(temp.service==="createReminder"){
      await createReminder(temp.payload);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  sendMail,
  fetchPendingEmail,
  createReminder,
  dummyService
};
