const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createOrder } = require("../controllers/orderController");

router.post("/create-order", authMiddleware, createOrder);

module.exports = router;
