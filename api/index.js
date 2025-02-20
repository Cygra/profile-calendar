const express = require("express");
const { createCanvas, registerFont } = require("canvas");
const { join } = require("path");

registerFont(join(__dirname, "static/CheeseOrange-Regular.ttf"), {
  family: "cheese-orange",
});

const app = express();

app.get("/image", (req, res) => {
  const { textColor, bgColor, locale } = req.query;
  res.setHeader("content-type", "image/jpg");

  const width = 800;
  const height = 70;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = bgColor || "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.font = "40px cheese-orange";
  ctx.fillStyle = textColor || "#000000";
  ctx.textAlign = "center";

  const currentDate = locale
    ? new Date().toLocaleDateString(locale)
    : new Date().toDateString();

  ctx.fillText("Welcome!   It's " + currentDate, width / 2, 50);

  const stream = canvas.createJPEGStream();
  stream.pipe(res);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
