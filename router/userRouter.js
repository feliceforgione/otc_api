const express = require("express");

const router = express.Router();

router.post("/register", (req, res, next) => {
  res.status(200).json({
    message: "Successful - Get",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
