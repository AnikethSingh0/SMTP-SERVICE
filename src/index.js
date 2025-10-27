const express = require("express");
const { PORT, REMINDER_BINDING_KEY } = require("./config/index");
const route = require("./routes/index.js");
const startCronJob = require("./utils/job.js");
const {createChannel,subscribeMessage} = require('./utils/message-queue.js')
const EmailService =require('./service/mail-service.js')
const app = express();

const startServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", route);
  const channel = await createChannel();
  subscribeMessage(channel,REMINDER_BINDING_KEY,EmailService.dummyService);
  // start cron job here
  //startCronJob();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
