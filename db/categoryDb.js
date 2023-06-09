require("dotenv").config();
const mongoose = require("mongoose");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

const saveCategory = async (newCategory) => {
  return await newCategory.save();
};

const findCategories = async (obj, selectFields) => {
  return await Category.find(obj).select(selectFields).exec();
};

const findCategoryDetail = async (id, selectFields) => {
  return await Category.findById(id).select(selectFields).exec();
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndRemove(id, { select: "_id" }).exec();
};

const updateCategory = async (id, updateFields) => {
  return await Category.findByIdAndUpdate(id, updateFields, {
    new: true,
  }).exec();
};

const productListingByCategory = async (id, sortFields) => {
  return await Category.findById(id)
    .populate({
      path: "productIds",
      select: "_id brand title ratings images price ",
      options: { sort: sortFields },
    })
    .exec();
};

module.exports = {
  saveCategory,
  findCategories,
  findCategoryDetail,
  deleteCategory,
  updateCategory,
  productListingByCategory,
};
