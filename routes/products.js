const router = require("express").Router();
const {
  getAllProductsController,
  getProductById,
} = require("../controllers/products");
router.post("/", getAllProductsController);
router.post("/:id", getProductById);
module.exports = router;
