const express = require('express');
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/orderData", orderController.dataStore);

module.exports = router