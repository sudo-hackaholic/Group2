import express from "express";

const vendorListRoute = express.Router();

vendorListRoute.get("/", (req, res) => {
  res.render("vendors-list");
});

export default vendorListRoute;
