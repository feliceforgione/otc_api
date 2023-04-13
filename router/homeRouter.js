const express = require("express");
const router = express.Router();
const { getIndex } = require("../services/homeService");

router.get("/", getIndex);

module.exports = router;
