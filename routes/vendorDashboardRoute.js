import express from "express";

const vendorDashboardRoute = express.Router();

vendorDashboardRoute.get("/", (req, res) => {
  res.render("vendor-dashboard");
});

export default vendorDashboardRoute;
