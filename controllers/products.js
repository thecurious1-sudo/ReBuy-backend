const Product = require(`../models/product`);
const User = require(`../models/user`);

module.exports.getAllProductsController = async (req, res) => {
  try {
    //find products where user is not the owner and sold==false with sorting and populating
    const products = await Product.find({
      user: { $ne: res.locals.userId },
      sold: false,
    })
      .sort({ createdAt: -1 })
      .populate(`user`, `name`);

    res.json({ status: `ok`, data: products });
  } catch (err) {
    console.log(err.message);
    res.json({ status: `error`, message: `Something went wrong` });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    //find product by id and populate user with name and address

    const product = await Product.findById(req.params.id).populate(
      `user`,
      `name`
    );
    res.json({ status: `ok`, data: product });
  } catch (err) {
    console.log(err.message);
    res.json({ status: `error`, message: `Something went wrong` });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, address } = req.body;
    const userId = res.locals.userId;
    const product = new Product({
      name,
      description,
      price,
      address,
      user: userId,
    });
    await product.save();
    const populatedProduct = await Product.findById(product._id).populate(
      `user`,
      `name`
    );
    //inserthis product in user's products array
    await User.findById(userId) //find user by id
      .updateOne({ $push: { products: product._id } });

    res.json({ status: `ok`, data: populatedProduct });
  } catch (err) {
    console.log(err.message);
    res.json({ status: `error`, message: `Something went wrong` });
  }
};
