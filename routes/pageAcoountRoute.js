import express from "express";

const pageAccountRoute = express.Router();

pageAccountRoute.get("/", (req, res) => {
  res.render("page-account", {
    errors: "errors",
  });
});

export default pageAccountRoute;
