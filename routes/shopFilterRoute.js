import express from "express";

const shopFilterRoute = express.Router();

shopFilterRoute.get("/", (req, res) => {
  res.render("shop-filter");
});

export default shopFilterRoute;
