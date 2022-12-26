const router = require("express").Router();
const {
  getAllProductsController,
  getProductById,
  createProduct,
} = require("../controllers/products");
router.post("/", getAllProductsController);
router.post("/new", createProduct);
router.post("/:id", getProductById);

module.exports = router;
