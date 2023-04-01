const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { findUser, saveUser } = require("../db/db");
const User = require("../models/userModel");
const saltRounds = 10;

router.post("/register", async (req, res, next) => {
  try {
    // Check if user already exists
    const user = await findUser({ email: req.body.email });
    if (user) {
      // User already exists. Try loggin in
      return res.status(409).json({ message: "User exists, try loggin in" });
    }
    const newUser = Object.assign(new User(), req.body);
    newUser._id = new mongoose.Types.ObjectId();

    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      // Store hash in your password DB.
      if (err)
        return res.status(501).json({ message: "Error: " + err.message });
      newUser.password = hash;
      const dbUser = await saveUser(newUser);
      res.status(201).json({
        message: "Successful Registration",
        user: dbUser,
      });
    });
  } catch (err) {
    res.status(501).json({
      error: {
        message: "Error :" + err.message,
        status: err.status,
      },
    });
  }
});

router.post("/login", (req, res, next) => {
  res.status(200).json({
    message: "Successful - Get",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
