const express = require("express");
const { PORT } = require('./config/index')
const sendMail = require('./service/mail-service')
const cron = require('node-cron')

const app = express();

const startServer = async () => {
    //console.log("sending mail...")
    //sendMail();
    //console.log("sent")
    

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.listen(PORT,() => {
        console.log(`${PORT} is starting`);
    });
};

startServer();
