const express = require("express");
const router = express.Router();
const reminderControllers = require("../../controllers/reminder-controllers");

router.post("/reminder", reminderControllers.create);

module.exports = router;
