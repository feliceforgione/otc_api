const express = require("express");
const {
  addCategory,
  delCategory,
  getAllCategory,
  getCategoryDetailByID,
  putCategory,
} = require("../services/categoryService");

const router = express.Router();

router.get("/", getAllCategory);

router.get("/:categoryId", getCategoryDetailByID);

router.post("/", addCategory);

router.put("/:categoryId", putCategory);

router.delete("/:categoryId", delCategory);

module.exports = router;
