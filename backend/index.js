const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");

<<<<<<< HEAD
app.use(cors());
app.use(express.json());

//*Available routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));
=======
app.get("/", (req, res) => {
  res.send("express loaded successfully");
});
app.get("/api.v1.login", (req, res) => {
  res.send("login loaded successfully");
});
app.get("/api.v1.signup", (req, res) => {
  res.send("signup loaded successfully");
});
>>>>>>> f09ae507d1c25ac9336028bc3fbbe178a1286e50

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
