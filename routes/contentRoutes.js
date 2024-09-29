const express = require("express");
const router = express.Router();
const contentController = require("../controllers/contentController");

router.post("/food", contentController.orderList)

module.exports = router;