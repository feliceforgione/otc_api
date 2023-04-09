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
    images: [
      {
        link: "https://plus.unsplash.com/premium_photo-1668446396629-43f49cc4f98c",
        id: "123456",
        zoomable: false,
        main_image: true,
      },
    ],
    dimensions: "3.75 x 1.56 x 3.12 Inches",
    price: 19.82,
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
      images: [
        {
          link: "https://plus.unsplash.com/premium_photo-1668446396629-43f49cc4f98c",
          id: "123456",
          zoomable: false,
          main_image: true,
        },
      ],
      dimensions: "3.75 x 1.56 x 3.12 Inches",
      price: 19.82,
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
    images: [
      {
        link: "https://plus.unsplash.com/premium_photo-1668446396629-43f49cc4f98c",
        id: "123456",
        zoomable: false,
        main_image: true,
      },
    ],
    dimensions: "3.75 x 1.56 x 3.12 Inches",
    price: 19.82,
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
    images: [
      {
        link: "https://plus.unsplash.com/premium_photo-1668446396629-43f49cc4f98c1",
        id: "1234561",
        zoomable: true,
        main_image: false,
      },
    ],
    dimensions: "3.75 x 1.56 x 3.12 Inches1",
    price: 19.821,
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
