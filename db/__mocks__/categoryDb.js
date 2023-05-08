const saveCategory = async (newCategory) => {
  console.log("Mock saveCategory");
  return Promise.resolve({
    name: "Cold",
    productIds: [],
    icon: "linktopic.com",
    slug: "cold-slug",
  });
};

const findCategories = async (obj, selectFields) => {
  console.log("Mocked findCategories");
  return Promise.resolve([
    {
      name: "Cold",
      productIds: [],
      icon: "linktopic.com",
      slug: "cold-slug",
    },
  ]);
};

const findCategoryDetail = async (id, selectFields) => {
  console.log("Mocked findCategoryDetail");
  return Promise.resolve({
    name: "Cold",
    productIds: [],
    icon: "linktopic.com",
    slug: "cold-slug",
  });
};

const deleteCategory = async (id) => {
  console.log("Mocked deleteCategory");
  return Promise.resolve({
    _id: id,
  });
};

const updateCategory = async (id, updateFields) => {
  console.log("Mocked updateCategory");
  return Promise.resolve({
    name: "Cold1",
    productIds: ["642e80770b50e7afd2693384"],
    icon: "linktopic.com1",
    slug: "cold",
  });
};

const productListingByCategory = async (id, selectFields) => {
  console.log("Mocked productListingByCategory ");
  return Promise.resolve({
    name: "Cold",
    productIds: [
      {
        _id: "642f3d22e306efcd83a8c4dd",
        brand: "brand",
        title: "title",
      },
    ],
    icon: "linktopic.com",
    slug: "cold-slug",
  });
};

module.exports = {
  saveCategory,
  findCategories,
  findCategoryDetail,
  deleteCategory,
  updateCategory,
  productListingByCategory,
};
