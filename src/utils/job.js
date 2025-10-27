const cron = require("node-cron");
const emailService = require("../service/mail-service");
const reminderService = require("../service/mail-service"); // your fetchPendingEmail function
const reminderRepository = require("../repository/reminder-repository")
const ReminderRepository = new reminderRepository();
const startCronJob = () => {
  cron.schedule("*/30 * * * * *", async () => {
    try {
      const pendingEmails = await reminderService.fetchPendingEmail(); // fetch from DB
      console.log("Fetched pending emails:", pendingEmails.length);

      for (const entry of pendingEmails) {
        await emailService.sendMail({
          to: entry.recepientEmail, // dynamic recipient
          subject: entry.subject,    // dynamic subject
          text: entry.content,       // dynamic body
        });

        console.log("Email sent to:", entry.recepientEmail);
        
        ReminderRepository.update(entry.id , {status:"SUCCESS"})
      
      }
    } catch (error) {
      console.error("Cron job error:", error);
    }
  });
};

module.exports = startCronJob;
