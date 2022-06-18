const express = require("express");
const router = express.Router();
const Mongo = require("../model/Mongo");

router.get("/", async (req, res) => {
  const movie = await Mongo.find();
  res.render("homePage", {
    movie,
  });
});

module.exports = router;
