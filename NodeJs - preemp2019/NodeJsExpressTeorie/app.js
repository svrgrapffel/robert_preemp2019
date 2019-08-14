const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const usersRouter = require("./routers/users");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", usersRouter);

server.listen(5000);

//module.exports = app;
