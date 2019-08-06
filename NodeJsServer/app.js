// const http = require("http");
// //const server = http.createServer();
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     res.setHeader("Acces-Control-Allow-Origin", "#");

//     if (/(\/)(categories)(\/)?$/gi.test(req.url)) {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       fs.readFile(__dirname + "/categories.json", (err, data) =>
//         res.end(data.toString())
//       );
//     } else if (/(\/)(products)(\/)?$/gi.test(req.url)) {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       fs.readFile(__dirname + "/products.json", (err, data) => {
//         const prod_list = JSON.parse(data);
//         const productsShown = prod_list.slice(0, 10);

//         res.end(JSON.stringify(productsShown));
//       });
//     } else if (/(\/)(products)(\/)([0-9\-]+)(\/)?/gi.test(req.url)) {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       fs.readFile(__dirname + "/products.json", (err, data) => {
//         const id = req.url.split("/").pop();
//         const prod_list = JSON.parse(data);
//         const product = prod_list.filter(item => id == item.id).pop();
//         res.end(JSON.stringify(product));
//       });
//     }
//   })
//   .listen(5000, "127.0.0.1");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");
const categoryRouter = require("./routes/categories");
const productsRouter = require("./routes/products");
const productDetail = require("./routes/productDetail");
const categorieDetailProd = require("./routes/categorieDatailProd");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", categoryRouter);
app.use("/", productsRouter);
app.use("/", productDetail);
app.use("/", categorieDetailProd);

server.listen(5000);
