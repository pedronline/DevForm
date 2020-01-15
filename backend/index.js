const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose").connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("hello pedro");
});

app.listen(port, () => {
  console.log(`Rdy on port http://localhost:${process.env.PORT}`);
});
