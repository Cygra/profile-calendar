import { createCanvas, registerFont } from "canvas";
import express from "express";
import { join } from "path";

registerFont(join(__dirname, "fonts/CheeseOrange-Regular.ttf"), {
  family: "cheese-orange",
});

const app = express();

app.get("/image", (req, res) => {
  const {
    textColor,
    bgColor,
    locale,
    fontSize,
    textAlign,
    width: queryWidth,
    height: queryHeight,
  } = req.query;

  res.setHeader("content-type", "image/jpg");

  const width = Number(queryWidth) || 800;

  const height = Number(queryHeight) || 70;

  const canvas = createCanvas(width, height);

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = (bgColor as string) || "#ffffff";

  ctx.fillRect(0, 0, width, height);

  ctx.font = `${fontSize || 40}px cheese-orange`;

  ctx.fillStyle = (textColor as string) || "#000000";

  ctx.textAlign = (textAlign as CanvasTextAlign) || "center";

  const currentDate = locale
    ? new Date().toLocaleDateString(locale as string)
    : new Date().toDateString();

  ctx.fillText("Welcome!   It's " + currentDate, width / 2, 50);

  const stream = canvas.createJPEGStream();

  stream.pipe(res);
});

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
