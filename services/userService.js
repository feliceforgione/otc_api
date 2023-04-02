const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { findUser, saveUser } = require("../db/db");
const User = require("../models/userModel");
const errorTemplate = require("../templates/errorTemplate");

const registerUser = async (req, res, next) => {
  try {
    // Check if user already exists
    const user = await findUser({ email: req.body.email });
    if (user) {
      // User already exists. Try loggin in
      throw new Error("User exists, try loggin in");
    }
    const newUser = Object.assign(new User(), req.body);
    newUser._id = new mongoose.Types.ObjectId();

    newUser.password = await bcrypt.hash(req.body.password, 10);
    const dbUser = await saveUser(newUser);
    dbUser.password = null;

    res.status(201).json({
      message: "Successful Registration",
      user: dbUser,
    });
  } catch (err) {
    return errorTemplate(res, err, err.message);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await findUser({ email: req.body.email });
    if (!user) throw new Error("Authentication Failed: Unable to find user");

    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result)
      throw new Error(
        "Authentication Failed: Email or password does not match"
      );

    // Create JSON Web Token
    user.password = null;
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET);

    return res.status(200).json({
      message: " Login Successful",
      user: user,
      logged: true,
      token: token,
    });
  } catch (err) {
    return errorTemplate(res, err, err.message);
  }
};

module.exports = { loginUser, registerUser };
