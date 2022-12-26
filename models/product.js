const mongoose = require(`mongoose`);
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    list_date: {
      type: Date,
      default: Date.now,
    },
    sold: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `User`,
    },
  },
  {
    // Keep the created and updated time
    timestamps: true,
  }
);

const Product = mongoose.model(`Product`, productSchema);

module.exports = Product;
