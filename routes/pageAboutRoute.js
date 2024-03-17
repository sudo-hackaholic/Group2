import express from "express";

const pageAboutRoute = express.Router();

pageAboutRoute.get("/", (req, res) => {
  res.render("page-about");
});

export default pageAboutRoute;
