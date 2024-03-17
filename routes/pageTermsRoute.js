import express from "express";

const pageTermsRoute = express.Router();

pageTermsRoute.get("/", (req, res) => {
  res.render("page-terms");
});

export default pageTermsRoute;
