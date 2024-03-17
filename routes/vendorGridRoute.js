import express from "express";

const vendorGridRoute = express.Router();

vendorGridRoute.get("/", (req, res) => {
  res.render("vendors-grid");
});

export default vendorGridRoute;
