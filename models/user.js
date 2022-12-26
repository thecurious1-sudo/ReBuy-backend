const mongoose = require(`mongoose`);
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Product`,
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Order`,
      },
    ],
  },
  {
    // Keep the created and updated time
    timestamps: true,
  }
);

const User = mongoose.model(`User`, userSchema);

module.exports = User;
