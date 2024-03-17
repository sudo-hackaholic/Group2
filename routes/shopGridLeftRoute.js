import express from "express";

const shopGridLeftRoute = express.Router();

shopGridLeftRoute.get("/", (req, res) => {
  res.render("shop-grid-left");
});

export default shopGridLeftRoute;
