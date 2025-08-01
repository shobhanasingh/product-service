const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    stock: Number,
    createdAt: Date,
  },
  { timestamps: true },
);
module.exports = mongoose.model("Product_schema", productSchema);
