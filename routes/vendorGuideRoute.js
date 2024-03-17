import express from "express";

const vendorGuideRoute = express.Router();

vendorGuideRoute.get("/", (req, res) => {
  res.render("vendor-guide");
});

export default vendorGuideRoute;
