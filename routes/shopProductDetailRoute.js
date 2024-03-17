import express from "express";

const shopProductDetailRoute = express.Router();

shopProductDetailRoute.get("/", (req, res) => {
  res.render("shop-product-detail");
});

export default shopProductDetailRoute;
