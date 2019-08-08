const products = require("../JsonFiles/products");
const fs = require("fs");

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

const createProduct = (req, res) => {
  //console.log(req.body);

  fs.readFile("./JsonFiles/products.json", function(err, data) {
    if (err) throw err;
    const newProduct = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      categories: req.body.categories,
      imgUrl: req.body.imgUrl
    };

    const listaProd = JSON.parse(data);
    const product = [...listaProd, newProduct];
    const nouaLista = JSON.stringify(product);
    //console.log(product);

    fs.writeFile("./JsonFiles/products.json", nouaLista, err => {
      if (err) throw err;
      return res.status(200).json({ message: "Product created" });
    });
  });

  // res.status(200).json({});

  // res.end(res);
};

const deleteProduct = (req, res) => {
  fs.readFile("./JsonFiles/products.json", function(err, data) {
    if (err) throw err;
    const { id } = req.params;

    const listaProd = JSON.parse(data);

    const products = listaProd.filter(product => {
      return product.id != id;
    });

    const nouaLista = JSON.stringify(products);

    fs.writeFile("./JsonFiles/products.json", nouaLista, err => {
      if (err) throw err;
      return res.status(200).json({ message: "Product deleted" });
    });
  });
};

const updateProduct = (req, res) => {
  fs.readFile("./JsonFiles/products.json", function(err, data) {
    if (err) throw err;
    const { id } = req.params;

    const listaProd = JSON.parse(data);
    const products = listaProd.map(product => {
      if (product.id == id) {
        return {
          ...product,
          ...req.body
        };
      } else return product;
    });

    const nouaLista = JSON.stringify(products);

    fs.writeFile("./JsonFiles/products.json", nouaLista, err => {
      if (err) throw err;
      return res.status(200).json({ message: "Product modified" });
    });
  });
};

module.exports = {
  getProducts,
  productDetail,
  createProduct,
  deleteProduct,
  updateProduct
};
