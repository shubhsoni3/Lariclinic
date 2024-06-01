const express = require("express");
const { db } = require("../connect");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

const appointment = (req, res) => {
  const { email, name, phone, date, msg } = req.body;
  console.log(email);
  if (!email || !name || !phone || !date || !msg) {
    return res
      .status(400)
      .json({ error: "Missing required fields in the request." });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAILSENDER,
      pass: process.env.EMAILPASSWORD,
    },
  });

  console.log("email", email);
  const mailOptions = {
    from: process.env.EMAILSENDER,
    to: "shubhsoni1996th@gmail.com",
    subject: "appointment for Cardiology",
    text: `Name: ${name},\n\nMessage: "${msg}",\n\nContact number is: "${phone}", \n\nBooking Date is: "${date}",\n\nEmail: "${email}"`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("An error occurred while sending the email.");
    }

    console.log("Email sent:", info.response);

    // Save data to the database
    const insertQuery =
      "INSERT INTO appointmentz (	patient_email, appointment_name, patient_mobile, booking_date,  message) VALUES (?, ?, ?, ?, ?)";
    const values = [email, name, phone, date, msg];

    db.query(insertQuery, values, (dbError, result) => {
      if (dbError) {
        console.error("Error saving data to the database:", dbError);
        return res
          .status(500)
          .send("An error occurred while saving data to the database.");
      }

      console.log("Data saved to the database:", result);
      res.status(200).send("Email sent and data saved successfully!");
    });
  });
};

const BookNow = (req, res) => {
  const { name, date, phone } = req.body;
  // console.log(email);
  if (!name || !phone || !date) {
    return res
      .status(400)
      .json({ error: "Missing required fields in the request." });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAILSENDER,
      pass: process.env.EMAILPASSWORD,
    },
  });

  // console.log("email", email);
  const mailOptions = {
    from: process.env.EMAILSENDER,
    to: "shubhsoni1996th@gmail.com",
    subject: "Appointments From Booking",
    text: `Name: ${name},\nContact number is: ${phone},\nBooking Date: ${date}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .send("An error occurred while sending the email .");
    }

    console.log("Email sent:", info.response);

    // Save data to the database
    const insertQuery =
      "INSERT INTO bookingnow (booking_name,booking_date,booking_mobile_number ) VALUES (?, ?, ?)";
    const values = [name, date, phone];
    console.log(name, date, phone);

    db.query(insertQuery, values, (dbError, result) => {
      if (dbError) {
        console.error("Error saving data to the database:", dbError);
        return res
          .status(500)
          .send("An error occurred while saving data to the database.");
      }

      console.log("Data saved to the database:", result);
      res.status(200).send("Email sent and data saved successfully!");
    });
  });
};

const contact = (req, res) => {
  const { email, name, phone, address, msg } = req.body;
  console.log(email);
  if (!email || !name || !phone || !address || !msg) {
    return res
      .status(400)
      .json({ error: "Missing required fields in the request." });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAILSENDER,
      pass: process.env.EMAILPASSWORD,
    },
  });

  console.log("email", email);
  const mailOptions = {
    from: process.env.EMAILSENDER,
    to: "shubhsoni1996th@gmail.com",
    subject: "Contact for Cardiology",
    text: `Name: ${name},\n\nMessage: "${msg}",\n\nContact number is: "${phone}", \n\n This is Patient Addresh: "${address}",\n\nEmail: "${email}"`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("An error occurred while sending the email.");
    }

    console.log("Email sent:", info.response);

    // Save data to the database
    const insertQuery =
      "INSERT INTO contacts (	contact_email, contact_name, contact_mobile, contact_addresh, contact_message) VALUES (?, ?, ? , ? ,?)";
    const values = [email, name, phone, address, msg];

    db.query(insertQuery, values, (dbError, result) => {
      if (dbError) {
        console.error("Error saving data to the database:", dbError);
        return res
          .status(500)
          .send("An error occurred while saving data to the database.");
      }

      console.log("Data saved to the database:", result);
      res.status(200).send("Email sent and data saved successfully!");
    });
  });
};

module.exports = {
  appointment,
  BookNow,
  contact,
};
