const {
  createNewOrder,
  getAllOrdersByUser,
  getOrderById,
} = require("../controllers/orders");
const { isUserAuthorizedForOrderDetails } = require("../utils/auth");
const router = require("express").Router();

router.post("/", getAllOrdersByUser);
router.post("/new", createNewOrder);
router.post("/:id", getOrderById);

module.exports = router;
