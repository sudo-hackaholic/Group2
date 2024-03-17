import express from "express";

const blogPostRightRoute = express.Router();

blogPostRightRoute.get("/", (req, res) => {
  res.render("blog-post-right");
});

export default blogPostRightRoute;
