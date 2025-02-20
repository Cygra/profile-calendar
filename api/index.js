const express = require("express");
const app = express();
const path = require("path");

app.get("/image", (req, res) => {
  const imagePath = path.join(__dirname, "TODO.jpg");
  res.setHeader("content-type", "image/jpg");
  res.sendFile(imagePath);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
