const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productIds: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  icon: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Category", categorySchema);
