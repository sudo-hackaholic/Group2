import express from "express";

const shopListRightRoute = express.Router();

shopListRightRoute.get("/", (req, res) => {
  res.render("shop-list-right");
});

export default shopListRightRoute;
