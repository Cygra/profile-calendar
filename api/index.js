const express = require("express");
const path = require("path");
const { createCanvas } = require("canvas");
const fs = require("fs");

const app = express();

app.get("/image", (req, res) => {
  const width = 800;
  const height = 70;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.font = "40px Arial";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";

  const currentDate = new Date().toDateString();

  ctx.fillText("Welcome! It's " + currentDate, width / 2, 50);

  const out = fs.createWriteStream("api/output.jpg");
  const stream = canvas.createJPEGStream();
  stream.pipe(out);

  out.on("finish", () => {
    const imagePath = path.join(__dirname, "output.jpg");
    res.setHeader("content-type", "image/jpg");
    res.sendFile(imagePath);
  });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
