const saveProduct = async (newProduct) => {
  console.log("Mock saveProduct");
  return Promise.resolve({
    brand: "brand",
    manufacturer: "manufacturer",
    title: "title",
    upc: "upc",
    description: "description",
    description_html: "description_html",
    description_full_html: "description_full_html",
    ratings_total: 100,
    ratings: 10.75,
  });
};

const findProducts = async (obj, selectFields) => {
  console.log("Mock findProducts");
  return Promise.resolve([
    {
      _id: "642f3d22e306efcd83a8c4dd",
      brand: "brand",
      manufacturer: "manufacturer",
      title: "title",
      upc: "upc",
      description: "description",
      description_html: "description_html",
      description_full_html: "description_full_html",
      ratings_total: 100,
      ratings: 10.75,
    },
  ]);
};

const findProductDetail = async (id, selectFields) => {
  console.log("Mock findProductDetail");
  return Promise.resolve({
    brand: "brand",
    manufacturer: "manufacturer",
    title: "title",
    upc: "upc",
    description: "description",
    description_html: "description_html",
    description_full_html: "description_full_html",
    ratings_total: 100,
    ratings: 10.75,
  });
};

const updateProduct = async (id, updateFields) => {
  console.log("Mock updateProduct");
  return Promise.resolve({
    brand: "brand1",
    manufacturer: "manufacturer1",
    title: "title1",
    upc: "upc1",
    description: "description1",
    description_html: "description_html1",
    description_full_html: "description_full_html1",
    ratings_total: 101,
    ratings: 11.75,
  });
};

const deleteProduct = async (id) => {
  console.log("Mock deleteProduct");
  return Promise.resolve({
    _id: "642e80770b50e7afd2693384",
  });
};

module.exports = {
  saveProduct,
  findProducts,
  findProductDetail,
  updateProduct,
  deleteProduct,
};
