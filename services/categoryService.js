const mongoose = require("mongoose");
const {
  saveCategory,
  findCategories,
  findCategoryDetail,
  deleteCategory,
  updateCategory,
  productListingByCategory,
} = require("../db/categoryDb");
const Category = require("../models/categoryModel");
const errorTemplate = require("../templates/errorTemplate");
const successTemplate = require("../templates/successTemplate");
const messages = require("../messages/messages");

const addCategory = async (req, res) => {
  try {
    const categoryExists = await findCategories({ name: req.body.name });

    if (categoryExists.length > 0) throw new Error(messages.category_exists);

    const newCategory = new Category(req.body);

    const dbCategory = await saveCategory(newCategory);

    successTemplate(res, dbCategory, messages.category_added, 201);
  } catch (err) {
    errorTemplate(res, err, err.message, 501);
  }
};

const delCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await findCategoryDetail(categoryId);
    if (!category) throw new Error(messages.category_not_found);
    const dbCategory = await deleteCategory(categoryId);

    successTemplate(res, dbCategory, messages.category_deleted, 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await findCategories({}, "-__v");
    successTemplate(res, categories, "Categories", 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

const getCategoryDetailByID = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const category = await findCategoryDetail(categoryId, "-__v");
    if (!category) throw new Error(messages.category_not_found);
    successTemplate(res, category, messages.category_found, 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const category = await productListingByCategory(categoryId);
    if (!category) throw new Error(messages.category_not_found);
    successTemplate(res, category, messages.category_found, 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

const putCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await findCategoryDetail(categoryId);
    if (!category) throw new Error(messages.category_not_found);
    const dbCategory = await updateCategory(categoryId, req.body);
    successTemplate(res, dbCategory, messages.category_updated, 200);
  } catch (err) {
    errorTemplate(res, err, err.message, 500);
  }
};

module.exports = {
  addCategory,
  delCategory,
  getAllCategory,
  getCategoryDetailByID,
  putCategory,
  getProductsByCategory,
};
