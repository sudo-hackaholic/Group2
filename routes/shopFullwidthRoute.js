import express from "express";

const shopFullwidthRoute = express.Router();

shopFullwidthRoute.get("/", (req, res) => {
  res.render("shop-fullwidth");
});

export default shopFullwidthRoute;
