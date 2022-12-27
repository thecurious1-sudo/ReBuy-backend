const User = require("../models/user");
const Product = require("../models/product");
module.exports.getAllMyItems = async (req, res) => {
  try {
    const user = await User.findById(res.locals.userId).populate("products");
    //sort products by createdAt
    user.products.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    res.status(200).json({
      status: "ok",
      data: user.products,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports.getMyItemDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "ok",
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
