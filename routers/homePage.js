const express = require("express");
const router = express.Router();
const Mongo = require("../model/Mongo");

router.get("/", async (req, res) => {
  const movie = await Mongo.find();
  res.render("homePage", {
    title:'Home page',
    movie,
  });
  // console.log(movie[0]);
});

module.exports = router;
