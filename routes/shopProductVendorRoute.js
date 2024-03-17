import express from "express";

const shopProductVendorRoute = express.Router();

shopProductVendorRoute.get("/", (req, res) => {
  res.render("shop-product-vendor");
});

export default shopProductVendorRoute;
