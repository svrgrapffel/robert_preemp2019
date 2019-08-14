const express = require("express");
const router = express.Router();
const { validatePathParams } = require("../MIddleware/validate");
const { getProductByIdSchema } = require("../MIddleware/validate");

const {
  getCategories,
  categorieDetailProd
} = require("../Controllers/categories");

const { getProducts, productDetail } = require("../Controllers/products");
router.get("/categories", getCategories);
router.get("/categories/:id/products", categorieDetailProd);

router.get("/products", getProducts);
router.get(
  "/products/:id",
  validatePathParams(getProductByIdSchema),
  productDetail
);
module.exports = router;
