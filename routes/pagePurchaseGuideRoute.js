import express from "express";

const pagePurchaseGuideRoute = express.Router();

pagePurchaseGuideRoute.get("/", (req, res) => {
  res.render("page-purchase-guide");
});

export default pagePurchaseGuideRoute;
