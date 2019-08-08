const express = require("express");

const app = express();
const routes = require("./Routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/", routes);

const port = 5000;
app.listen(port, () => console.log(`Connected at port ${port}`));
module.exports = app;
