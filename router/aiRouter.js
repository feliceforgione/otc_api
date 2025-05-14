const express = require("express");
const { aiStreamText } = require("../services/ai/aiService");

const router = express.Router();

router.post("/", aiStreamText);

module.exports = router;
