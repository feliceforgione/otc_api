const mongoose = require("mongoose");
const {
  saveProduct,
  findProducts,
  findProductDetail,
  updateProduct,
  deleteProduct,
} = require("../db/productDb");
const Product = require("../models/productModel");
const errorTemplate = require("../templates/errorTemplate");
const successTemplate = require("../templates/successTemplate");
const messages = require("../messages/messages");

const addProduct = async (req, res) => {
  try {
    const productExists = await findProducts({
      $or: [{ title: req.body.title }, { upc: req.body.upc }],
    });

    if (productExists.length > 0) throw new Error(messages.product_exists);

    const newProduct = new Product(req.body);

    const dbProduct = await saveProduct(newProduct);

    successTemplate(res, dbProduct, messages.product_added, 201);
  } catch (err) {
    errorTemplate(res, err, err.message, 501);
  }
};

const getProducts = async (req, res) => {
  try {
    let filter = {};
    const searchWords = req.query.search;
    const pageSize = req.query.pageSize;
    const page = req.query.page;
    const sort = req.query.sort;
    if (searchWords) {
      const queryRegex = new RegExp(searchWords, "i");
      filter = {
        $or: [{ title: queryRegex }, { description_full_html: queryRegex }],
      };
    }
    const products = await findProducts(filter, "-__v", sort, pageSize, page);
    successTemplate(res, products, "Products", 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

const getProductDetailByID = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await findProductDetail(productId, "-__v");
    if (!product) throw new Error(messages.product_not_found);
    successTemplate(res, product, messages.product_found, 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

const putProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await findProductDetail(productId);
    if (!product) throw new Error(messages.product_not_found);
    const dbProduct = await updateProduct(productId, req.body);
    successTemplate(res, dbProduct, messages.product_updated, 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

const delProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await findProductDetail(productId);
    if (!product) throw new Error(messages.product_not_found);
    const dbProduct = await deleteProduct(productId);

    successTemplate(res, dbProduct, messages.product_deleted, 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

module.exports = {
  getProducts,
  addProduct,
  getProductDetailByID,
  putProduct,
  delProduct,
};
