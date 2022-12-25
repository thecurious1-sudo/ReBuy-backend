const Product = require(`../models/product`);
const User = require(`../models/user`);

module.exports.getAllProductsController = async (req, res) => {
  try {
    //find products where user is not the owner
    const products = await Product.find({
      user: { $ne: res.locals.userId },
    });
    res.json({ status: `ok`, data: products });
  } catch (err) {
    console.log(err.message);
    res.json({ status: `error`, message: `Something went wrong` });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ status: `ok`, data: product });
  } catch (err) {
    console.log(err.message);
    res.json({ status: `error`, message: `Something went wrong` });
  }
};
