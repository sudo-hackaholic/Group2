import express from "express";

const pageContactRoute = express.Router();

pageContactRoute.get("/", (req, res) => {
  res.render("page-contact");
});

export default pageContactRoute;
