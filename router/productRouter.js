const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProductDetailByID,
  putProduct,
  delProduct,
} = require("../services/productService");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:productId", getProductDetailByID);

router.post("/", addProduct);

router.put("/:productId", putProduct);

router.delete("/:productId", delProduct);

module.exports = router;
