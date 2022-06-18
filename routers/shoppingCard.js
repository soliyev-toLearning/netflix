const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("shoppingCard");
});

module.exports = router;