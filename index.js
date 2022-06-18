const express = require("express");
const app = express();
const path = require("path");
const { create } = require("express-handlebars");
const mongoose = require("mongoose");

const exhbs = create({
  extname: "hbs",
  defaultLayout: "main",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});
app.engine("hbs", exhbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const homePage = require("./routers/homePage");
const addMovie = require("./routers/addMovie");
const signIn = require("./routers/signIn");
const signUp = require("./routers/signUp");
const shoppingCard = require("./routers/shoppingCard");
// AppUse Routers
app.use("/", homePage);
app.use("/add/movie", addMovie);
app.use("/signin", signIn);
app.use("/signup", signUp);
app.use("/shopping/card", shoppingCard);

try {
  const port = normalizePort(process.env.port || 5000);

  mongoose.connect(
    "mongodb+srv://SokhibjonDev:sohibjonpassword@cluster0.tg032.mongodb.net/netflix",
    (err) => {
      if (err) console.error(err);
      else console.log("Mongo db connected");
    }
  );

  app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
} catch (error) {
  console.log(error);
}

function normalizePort(val) {
  let port = parseInt(val);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
