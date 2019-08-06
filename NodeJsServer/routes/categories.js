const express = require("express");
const router = express.Router();
const categories = require("../categories");

router.get("/categories", (req, res) => {
  res.status(200).json(categories);
  res.end(res);
});
module.exports = router;
