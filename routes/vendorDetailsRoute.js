import express from "express";

const vendorDetailsRoute = express.Router();

vendorDetailsRoute.get("/", (req, res) => {
  res.render("vendor-details-1");
});

export default vendorDetailsRoute;
