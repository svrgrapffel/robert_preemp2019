const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.status(200).json({ name: "Ted", email: "ted@example.com" });
  res.end(res);
});

module.exports = router;
