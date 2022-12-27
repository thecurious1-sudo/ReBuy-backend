const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");

// New Order
module.exports.createNewOrder = async (req, res) => {
  try {
    // console.log("in this");
    const { productId } = req.body;
    const userId = res.locals.userId;
    const order = new Order({
      user: userId,
      product: productId,
    });
    await order.save();
    //insert order id in product
    const product = await Product.updateOne(
      { _id: productId },
      { $set: { order: order._id, sold: true } }
    );
    //insert order id in user
    const user = await User.updateOne(
      { _id: userId },
      { $push: { orders: order._id } }
    );
    res.json({ status: `ok`, data: order });
  } catch (err) {
    res.json({ status: `error`, message: `Something went wrong` });
  }
};

//Get All Orders By User
module.exports.getAllOrdersByUser = async (req, res) => {
  try {
    const userId = res.locals.userId;
    const orders = await User.findById(userId).populate({
      path: "orders",
      populate: {
        path: "product",
        model: "Product",
      },
    });
    res.json({ status: `ok`, data: orders.orders });
  } catch (err) {
    res.json({ status: `error`, message: `Something went wrong` });
  }
};

module.exports.getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const order = await res.json({ status: `ok`, data: order });
    // find order and populate product and user and inside product, populate user

    const order = await Order.findById(id)
      .populate({
        path: "product",
        model: "Product",
        populate: {
          path: "user",
          model: "User",
        },
      })
      .populate({
        path: "user",
        model: "User",
      });

    // const order = await Order.findById(id).populate({
    //   path: "product",
    //   model: "Product",
    // });
    res.locals.orderUser = order.user._id.toString();
    res.locals.data = order;
    res.json({ status: `ok`, data: order });
    next();
  } catch (err) {
    console.log(err);
    res.json({ status: `error`, message: `Something went wrong` });
  }
};
