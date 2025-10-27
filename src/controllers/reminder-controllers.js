const mailService = require("../service/mail-service.js");

const create = async (req, res) => {
  try {
    const data = await mailService.createReminder(req.body);
    res.status(201).json({
      success: true,
      data,
      err: {},
      message: "Successfully registered an email reminder",
    });
  } catch (error) {
    console.error("Error creating reminder:", error);
    res.status(500).json({
      success: false,
      data: {},
      err: error.message,
      message: "Unsuccessfully registered an email reminder",
    });
  }
};

module.exports = { create }; // ✅ important
