const express = require('express');
const router = express.Router();
const reminderRoute = require('./v1/reminder-route');

router.use('/v1', reminderRoute);

module.exports = router;
