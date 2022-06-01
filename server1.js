const express = require("express");

const path = require("path");

const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, "/public");
console.log(viewsPath);

// const pugPath = path.join(__dirname, "views");
// console.log(pugPath);

// const particlesPath = path.join(__dirname, "template/particles");
// console.log(particlesPath);

// hbs.registerPartials(particlesPath);

// to set the the view engine
// app.set("view engine", "hbs");

app.use(express.static(viewsPath));

// to set the template directory or reform / cutmisze views directory
// app.set("views", viewsPath);

// app.set("view engine","pug");

// app.set('views',pugPath);

app.get("/", (req, res) => {
  // res.sendFile(__dirname + '/HomePage.html');
//   res.render("index");
});

app.get("/gdp", (req, res) => {
//   res.render("gdp");
    // res.end("this is the gdp");
    res.sendFile(viewsPath + "/gdp.html");
});

app.get("/import", (req, res) => {
//   res.render("import");
    // res.end("this is the import");
    res.sendFile(viewsPath + "/import.html");
});

app.get("/export", (req, res) => {
  //   res.render("export");
  // res.end("this is the export");
  res.sendFile(viewsPath + "/export.html");
});

app.get("/business", (req, res) => {
//   res.render("business");
    // res.end("this is the business");
    res.sendFile(viewsPath + "/business.html");
});

app.get("/goverment", (req, res) => {
//   res.render("government");
    // res.end("this is the goverment");
    res.sendFile(viewsPath + "/goverment.html");
});

app.get("/other", (req, res) => {
//   res.render("other");
    // res.end("this is the other incadicater ");
    res.sendFile(viewsPath + "/other.html");
});

app.listen(port, () => {
  console.log("Server run   ning at port no " + port);
});
