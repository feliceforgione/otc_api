const express = require("express");
const cors = require("cors");
const app = express();
const { connect } = require("../db/db");

const userRouter = require("../router/userRouter");
const productRouter = require("../router/productRouter");
const categoryRouter = require("../router/categoryRouter");

// Middleware
// contract for incoming json payloads only
app.use(express.json());
// url encoding
app.use(express.urlencoded({ extended: true }));
// cors policy
app.use(cors());

// health point
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Service is up" });
});

// Routers
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/category", categoryRouter);

// Bad url or error
app.use((req, res, next) => {
  const error = new Error();
  error.message = "Not Found";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ error: { message: error.message, error: error.status } });
});

connect();

module.exports = app;
