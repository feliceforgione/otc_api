const express = require("express");
const {
  addCategory,
  delCategory,
  getAllCategory,
  getCategoryDetailByID,
  putCategory,
  getProductsByCategory,
} = require("../services/categoryService");

const auth = require("../auth/authorization");

const router = express.Router();

router.get("/", getAllCategory);

router.get("/:categoryId", getCategoryDetailByID);

router.get("/:categoryId/products", getProductsByCategory);

router.post("/", [auth, addCategory]);

router.put("/:categoryId", [auth, putCategory]);

router.delete("/:categoryId", [auth, delCategory]);

module.exports = router;
