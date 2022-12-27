const express = require("express");
const { getAllMyItems, getMyItemDetails } = require("../controllers/myItems");
const router = express.Router();

router.post("/", getAllMyItems);

router.post("/:id", getMyItemDetails);

module.exports = router;
