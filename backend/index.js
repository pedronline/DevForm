const express = require("express");

const port = process.env.port || 3334;

const app = express();

app.get("/", (req, res) => {
  return res.send("hello pedro");
});

app.listen(port, () => {
  console.log(`Rdy on port ${port}`);
});
