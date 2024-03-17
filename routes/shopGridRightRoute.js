import express from "express";

const shopGridRightRoute = express.Router();

shopGridRightRoute.get("/", (req, res) => {
  res.render("shop-grid-right");
});

export default shopGridRightRoute;
