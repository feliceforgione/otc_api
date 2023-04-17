const express = require("express");
const {
  addProduct,
  getProducts,
  getProductDetailByID,
  putProduct,
  delProduct,
} = require("../services/productService");
const auth = require("../auth/authorization");
const router = express.Router();

router.get("/", getProducts);

router.get("/:productId", getProductDetailByID);

router.post("/", [auth, addProduct]);

router.put("/:productId", [auth, putProduct]);

router.delete("/:productId", [auth, delProduct]);

module.exports = router;
