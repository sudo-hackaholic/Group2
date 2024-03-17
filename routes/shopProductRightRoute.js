import express from "express";

const shopProductRightRoute = express.Router();

shopProductRightRoute.get("/", (req, res) => {
  res.render("shop-product-right");
});

export default shopProductRightRoute;
