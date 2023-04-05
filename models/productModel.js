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
});

module.exports = mongoose.model("Product", productSchema);
