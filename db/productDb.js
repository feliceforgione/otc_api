require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/productModel");

const saveProduct = async (newProduct) => {
  return await newProduct.save();
};

const findProducts = async (obj, selectFields) => {
  return await Product.find(obj).select(selectFields).sort("-_id").exec();
};

const findProductDetail = async (id, selectFields) => {
  return await Product.findById(id).select(selectFields).exec();
};

const updateProduct = async (id, updateFields) => {
  return await Product.findByIdAndUpdate(id, updateFields, {
    new: true,
  }).exec();
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndRemove(id, { select: "_id" }).exec();
};

module.exports = {
  saveProduct,
  findProducts,
  findProductDetail,
  updateProduct,
  deleteProduct,
};
