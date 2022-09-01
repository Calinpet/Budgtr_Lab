// REQUIRE DEPENDENCIES
const express = require("express");
const budgets = require("./models/budgets.js");
const fruits = require("./models/budgets.js");

// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// DEFINE OUR ROUTES

//INDEX
app.get("/budgets", (rep, res) => {
  res.render("index.ejs", {
    budgets: budgets,
  });
});

//NEW
app.get("/budgets/new", (req, res) => {
  res.render("new.ejs");
});

//CREATE
app.post("/budgets", (req, res) => {
  budgets.push(req.body);
  res.redirect("/budgets");
});

//SHOW
app.get("/budgets/:indexOfBudgetsArray", (req, res) => {
  res.render("show.ejs", {
    budgets: budgets[req.params.indexOfBudgetsArray],
  });
});

// TELL OUR APP TO LISTEN ON PORT...
app.listen(3000, () => {
  console.log(`listening on port `, 3000);
});
