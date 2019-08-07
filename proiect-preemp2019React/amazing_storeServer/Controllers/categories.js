const products = require("../JsonFiles/products");
const categories = require("../JsonFiles/categories");
const getCategories = (req, res) => {
  res.status(200).json(categories);
  res.end(res);
};

const categorieDetailProd = (req, res) => {
  const id = parseInt(req.params.id);
  const catProd = products.filter(item => {
    return item.categories.includes(id);
  });
  res.status(200).json(catProd);
};
module.exports = { getCategories, categorieDetailProd };
