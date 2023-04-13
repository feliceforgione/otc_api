const express = require("express");
const cors = require("cors");
const app = express();
const { connect } = require("../db/db");
const swaggerUi = require("swagger-ui-express");
const openApiDocument = require("../config/swaggerOptions.json");

const userRouter = require("../router/userRouter");
const productRouter = require("../router/productRouter");
const categoryRouter = require("../router/categoryRouter");
const homeRouter = require("../router/homeRouter");

// Middleware
// contract for incoming json payloads only
app.use(express.json());
// url encoding
app.use(express.urlencoded({ extended: true }));
// cors policy
app.use(cors());

// template engine
app.set("views", "views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine
app.use(express.static("public"));

// Routers
app.use("/", homeRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/category", categoryRouter);

// Api-docs swagger middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

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
