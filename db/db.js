require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/userModel");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is up and running");
  } catch (err) {
    console.log("MongoDB error:", err);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connect.close();
    console.log("Mongo disconnected");
  } catch (err) {
    console.log("MongoDB error:", err);
  }
};

const saveUser = async (newUser) => {
  return await newUser.save();
};

const findUser = async (obj) => {
  return await User.findOne(obj);
};

module.exports = { connect, disconnect, saveUser, findUser };
