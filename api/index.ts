import { createCanvas, registerFont } from "canvas";
import express from "express";
import { join } from "path";

const app = express();

app.get("/image", (req, res) => {
  const {
    textColor = "#000000",
    bgColor = "#ffffff",
    fontSize = "60",
    width: queryWidth,
    height: queryHeight,
    font = "cheese-orange",
    radius,
    title = "Welcome!",
  } = req.query as { [k: string]: string };

  res.setHeader("content-type", "image/png");

  registerFont(join(__dirname, `fonts/${font}.ttf`), {
    family: font,
  });

  const width = Number(queryWidth) || 1200;

  const height = Number(queryHeight) || 100;

  const canvas = createCanvas(width, height);

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = bgColor;

  if (Number(radius)) {
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, Number(radius));
    ctx.stroke();
    ctx.fill();
  } else {
    ctx.fillRect(0, 0, width, height);
  }

  ctx.font = `${fontSize}px ${font}`;

  ctx.fillStyle = textColor;

  const currentDate = new Date().toDateString();

  const textString = `${title}   It's ${currentDate}`;

  ctx.textBaseline = "middle";

  ctx.textAlign = "center";

  ctx.fillText(textString, width / 2, height / 2);

  const stream = canvas.createPNGStream();

  stream.pipe(res);
});

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
