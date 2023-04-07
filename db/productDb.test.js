const {
  saveProduct,
  findProducts,
  findProductDetail,
  updateProduct,
  deleteProduct,
} = require("./productDb");
const Product = require("../models/productModel");
const { connect, disconnect, saveUser, findUser } = require("./db");

jest.mock("./productDb");
jest.mock("./db");

let productId = null;

describe("Product Unit Tests", () => {
  beforeAll(async () => {
    return await connect();
  });

  test("As a user I want to create a new product", async () => {
    const productDetails = {
      brand: "brand",
      manufacturer: "manufacturer",
      title: "title",
      upc: "upc",
      description: "description",
      description_html: "description_html",
      description_full_html: "description_full_html",
      ratings_total: 100,
      ratings: 10.75,
    };

    const newProduct = new Product(productDetails);
    const savedProduct = await saveProduct(newProduct);
    productId = savedProduct._id;
    expect(savedProduct.brand).toEqual("brand");
    expect(savedProduct.manufacturer).toEqual("manufacturer");
    expect(savedProduct.title).toEqual("title");
    expect(savedProduct.description).toEqual("description");
    expect(savedProduct.description_html).toEqual("description_html");
    expect(savedProduct.description_full_html).toEqual("description_full_html");
    expect(savedProduct.ratings_total).toEqual(100);
    expect(savedProduct.ratings).toEqual(10.75);
  });

  test("As a user I want to find products", async () => {
    const products = await findProducts({ _id: productId });
    expect(products[0].brand).toEqual("brand");
    expect(products[0].manufacturer).toEqual("manufacturer");
    expect(products[0].title).toEqual("title");
    expect(products[0].description).toEqual("description");
    expect(products[0].description_html).toEqual("description_html");
    expect(products[0].description_full_html).toEqual("description_full_html");
    expect(products[0].ratings_total).toEqual(100);
    expect(products[0].ratings).toEqual(10.75);
  });

  test("As a user I want to get product detail", async () => {
    const product = await findProductDetail(productId);
    expect(product.brand).toEqual("brand");
    expect(product.manufacturer).toEqual("manufacturer");
    expect(product.title).toEqual("title");
    expect(product.description).toEqual("description");
    expect(product.description_html).toEqual("description_html");
    expect(product.description_full_html).toEqual("description_full_html");
    expect(product.ratings_total).toEqual(100);
    expect(product.ratings).toEqual(10.75);
  });

  test("As a user I want to update a product", async () => {
    const updatedFields = {
      brand: "brand1",
      manufacturer: "manufacturer1",
      title: "title1",
      upc: "upc1",
      description: "description1",
      description_html: "description_html1",
      description_full_html: "description_full_html1",
      ratings_total: 101,
      ratings: 11.75,
    };

    const product = await updateProduct(productId, updatedFields);
    expect(product.brand).toEqual("brand1");
    expect(product.manufacturer).toEqual("manufacturer1");
    expect(product.title).toEqual("title1");
    expect(product.description).toEqual("description1");
    expect(product.description_html).toEqual("description_html1");
    expect(product.description_full_html).toEqual("description_full_html1");
    expect(product.ratings_total).toEqual(101);
    expect(product.ratings).toEqual(11.75);
  });

  test("As a user I want to delete a product", async () => {
    const deleted = await deleteProduct(productId);
    expect(deleted).toHaveProperty("_id");
  });

  afterAll(async () => {
    return await disconnect();
  });
});
