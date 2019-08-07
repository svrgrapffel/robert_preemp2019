const express = require("express");

const app = express();
const routes = require("./Routes/routes");
app.use("/", routes);

const port = 5000;
app.listen(port, () => console.log(`Connected at port ${port}`));
