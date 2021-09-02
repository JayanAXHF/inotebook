const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("express loaded successfully");
});
app.get("/api.v1.login", (req, res) => {
  res.send("login loaded successfully");
});
app.get("/api.v1.signup", (req, res) => {
  res.send("signup loaded successfully");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
