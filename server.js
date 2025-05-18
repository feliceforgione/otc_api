const http = require("http");
const app = require("./app/app");
require("dotenv").config();

http.createServer(app).listen(process.env.PORT, "0.0.0.0", () => {
  console.log(
    `[${process.env.NODE_ENV}] Server is running on port: http://${process.env.SERVER_DOMAIN}:${process.env.PORT}`
  );
});
