const products = require("../products");

const getProducts = (req, res) => {
  res.status(200).json(products);
  res.end(res);
};

const productDetail = (req, res) => {
  const id = req.params.id;
  const prod = products.filter(item => id == item.id).pop();
  const data = {
    data: [prod]
  };
  const error = {
    errors: [{ message: "product not found" }]
  };

  if (prod === undefined) {
    res.status(200).json(error);
    return;
  }
  res.status(200).json(data);
};

module.exports = { getProducts, productDetail };
