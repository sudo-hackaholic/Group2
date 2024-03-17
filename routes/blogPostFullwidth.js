import express from "express";

const blogPostFullwidthRoute = express.Router();

blogPostFullwidthRoute.get("/", (req, res) => {
  res.render("blog-post-fullwidth");
});

export default blogPostFullwidthRoute;
