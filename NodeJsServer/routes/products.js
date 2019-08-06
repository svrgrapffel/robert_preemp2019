const express = require("express");
const router = express.Router();
const products = require("../products");

router.get("/products", (req, res) => {
  res.status(200).json(products);
  res.end(res);
});

module.exports = router;
