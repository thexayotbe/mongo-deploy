const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

app.listen(8080, async () => {
  await mongoose.connect("mongodb://localhost:27017/admin");

  console.log("Connection established listening on port http://localhost:8080");
});
