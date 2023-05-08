const Category = require("../models/categoryModel.js");
const {
  saveCategory,
  findCategories,
  findCategoryDetail,
  deleteCategory,
  updateCategory,
  productListingByCategory,
} = require("./categoryDb");
const { findProducts } = require("./productDb");
const { connect, disconnect, saveUser, findUser } = require("./db");

jest.mock("./categoryDb");
jest.mock("./productDb");
jest.mock("./db");

let categoryID = null;

describe("Category DB tests", () => {
  beforeAll(async () => {
    return await connect();
  });

  test("As a user I want to save a new category", async () => {
    const product = await findProducts();
    const newCategory = new Category({
      name: "Cold",
      productIds: [product[0]._id],
      icon: "linktopic.com",
      slug: "cold-slug",
    });
    const category = await saveCategory(newCategory);
    categoryID = category._id;
    expect(category.name).toEqual("Cold");
    expect(category.icon).toEqual("linktopic.com");
    expect(category).toHaveProperty("productIds");
    expect(category.slug).toEqual("cold-slug");
  });

  test("As a user I want to find all categories", async () => {
    const categories = await findCategories();
    expect(categories[0].name).toEqual("Cold");
    expect(categories[0].icon).toEqual("linktopic.com");
    expect(categories[0]).toHaveProperty("productIds");
    expect(categories[0].slug).toEqual("cold-slug");
  });

  test("As a user I want to get category details", async () => {
    const category = await findCategoryDetail(categoryID);
    expect(category.name).toEqual("Cold");
    expect(category.icon).toEqual("linktopic.com");
    expect(category).toHaveProperty("productIds");
    expect(category.slug).toEqual("cold-slug");
  });

  test("As a user I want to get products by category", async () => {
    const category = await productListingByCategory(categoryID);
    expect(category.name).toEqual("Cold");
    expect(category.icon).toEqual("linktopic.com");
    expect(category.slug).toEqual("cold-slug");
    expect(category).toHaveProperty("productIds");
    expect(category.productIds[0]).toHaveProperty("_id");
    expect(category.productIds[0]).toHaveProperty("brand");
    expect(category.productIds[0]).toHaveProperty("title");
  });

  test("As a user I want to update a category", async () => {
    const updatedFields = {
      name: "Cold1",
      productIds: ["642e80770b50e7afd2693384"],
      icon: "linktopic.com1",
      slug: "cold",
    };
    const category = await updateCategory(categoryID, updatedFields);
    expect(category.name).toEqual("Cold1");
    expect(category.icon).toEqual("linktopic.com1");
    expect(category).toHaveProperty("productIds");
    expect(category.slug).toEqual("cold");
  });

  test("As a user I want to delete a category", async () => {
    const category = await deleteCategory(categoryID);
    expect(category._id).toEqual(categoryID);
  });

  afterAll(async () => {
    return await disconnect();
  });
});
