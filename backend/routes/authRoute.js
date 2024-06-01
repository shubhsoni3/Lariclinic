const express = require("express");
const {
  contact,
  BookNow,
  appointment,
} = require("../controllers/authController");

const router = express.Router();

router.post("/appointment", appointment);
router.post("/BookNow", BookNow);
router.post("/contact", contact);

module.exports = router;
