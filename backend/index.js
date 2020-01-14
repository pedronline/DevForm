const express = require("express");

const port = process.env.PORT || 3334;

const app = express();

app.get("/", (req, res) => {
  return res.send("hello pedro");
});

app.listen(port, () => {
  console.log(`Rdy on port ${port}`);
});
