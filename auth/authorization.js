require("dotenv").config();
const jwt = require("jsonwebtoken");
const errorTemplate = require("../templates/errorTemplate");
const messages = require("../messages/messages");

const auth = (req, res, next) => {
  try {
    // `Bearer: slasjfdljasldfjalsdfjljslfjls`
    const [, token] = req.headers.authorization.split(" ");
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    errorTemplate(res, err, messages.auth_failed, 500);
  }
};

module.exports = auth;
