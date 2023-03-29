require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is up and running");
  } catch (err) {
    console.log("MongoDB error:", err);
  }
};

module.exports = { connect };
