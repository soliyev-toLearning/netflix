const express = require("express");
const app = express();
const path = require("path");
const { create } = require("express-handlebars");

const exhbs = create({
    extname: "hbs",
    defaultLayout: "main",
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