import express from "express";

const shopErrorRoute = express.Router();

shopErrorRoute.get("/", (req, res) => {
  res.render("components/header/header");
});

export default shopErrorRoute;
