import express from "express";

const shopListLeftRoute = express.Router();

shopListLeftRoute.get("/", (req, res) => {
  res.render("shop-list-left");
});

export default shopListLeftRoute;
