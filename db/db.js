require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/userModel");

const connect = async () => {
  try {
    console.log("MongoDB is up and running", process.env.MONGO_DB);
    await mongoose.connect(process.env.MONGO, {
      dbName: process.env.MONGO_DB,
    });
  } catch (err) {
    console.log("MongoDB error:", err);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connection.close();
    console.log("Mongo disconnected");
  } catch (err) {
    console.log("MongoDB error:", err);
  }
};

const saveUser = async (newUser) => {
  return await newUser.save();
};

const findUser = async (obj) => {
  return await User.findOne(obj).exec();
};

module.exports = {
  connect,
  disconnect,
  saveUser,
  findUser,
};
