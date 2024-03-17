import express from "express";

const shopWishlistRoute = express.Router();

shopWishlistRoute.get("/", (req, res) => {
  res.render("shop-wishlist");
});

export default shopWishlistRoute;
