import express from "express";

const pageAbout2Route = express.Router();

pageAbout2Route.get("/", (req, res) => {
  res.render("page-about-2");
});

export default pageAbout2Route;
