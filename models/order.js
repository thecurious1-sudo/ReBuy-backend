const mongoose = require(`mongoose`);
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `User`,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Product`,
    },
  },
  {
    // Keep the created and updated time
    timestamps: true,
  }
);

const Order = mongoose.model(`Order`, orderSchema);

module.exports = Order;
