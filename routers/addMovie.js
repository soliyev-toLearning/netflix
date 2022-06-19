const express = require("express");
const router = express.Router();
const Mongo = require("../model/Mongo");
router.get("/", (req, res) => {
  res.render("addMovie");
});

router.post("/add", async (req, res) => {
  const movie = new Mongo({
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
  });

  await movie.save();
  res.redirect("/");
});

module.exports = router;
