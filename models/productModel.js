const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  upc: {
    type: String,
  },
  description: {
    type: String,
  },
  description_html: {
    type: String,
  },
  description_full_html: {
    type: String,
  },
  ratings_total: {
    type: Number,
  },
  ratings: {
    type: Number,
  },
  images: [
    {
      link: String,
      id: String,
      zoomable: Boolean,
      main_image: Boolean,
    },
  ],
  dimensions: {
    type: String,
  },
  price: {
    type: Number,
  },
  in_stock: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Product", productSchema);
