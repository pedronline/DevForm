const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv").config();

const mongoose = require("mongoose").connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(routes)



app.listen(port, () => {
  console.log(`Rdy on port http://localhost:${process.env.PORT}`);
});
