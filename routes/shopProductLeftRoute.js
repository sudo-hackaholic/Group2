import express from "express";

const shopProductLeftRoute = express.Router();

shopProductLeftRoute.get("/", (req, res) => {
  res.render("shop-product-left");
});

export default shopProductLeftRoute;
