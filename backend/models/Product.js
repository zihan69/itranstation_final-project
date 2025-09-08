const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please add quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please add price"],
    },
    category: {
      type: String,
      required: [true, "Please add category"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
