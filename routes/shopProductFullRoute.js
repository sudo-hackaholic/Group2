import express from "express";

const shopProductFullRoute = express.Router();

shopProductFullRoute.get("/", (req, res) => {
  res.render("shop-product-full");
});

export default shopProductFullRoute;
