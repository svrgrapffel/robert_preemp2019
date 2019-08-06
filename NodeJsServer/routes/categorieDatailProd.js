const express = require("express");
const router = express.Router();
const products = require("../products");

router.get("/categories/:id/products", (req, res) => {
  const id = parseInt(req.params.id);
  const catProd = products.filter(item => {
    return item.categories.includes(id);
  });

  const error = {
    errors: [{ message: "product not found" }]
  };

  if (catProd === undefined) {
    res.status(200).json(error);
    return;
  }
  res.status(200).json(catProd);
});
module.exports = router;
