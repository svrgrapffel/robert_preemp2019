const express = require("express");
const router = express.Router();

const {
  getCategories,
  categorieDetailProd
} = require("../Controllers/categories");

const {
  getProducts,
  productDetail,
  createProduct,
  deleteProduct,
  updateProduct
} = require("../Controllers/products");

router.get("/categories", getCategories);
router.get("/categories/:id/products", categorieDetailProd);
router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.patch("/products/:id", updateProduct);
router.get("/products/:id", productDetail);

module.exports = router;
