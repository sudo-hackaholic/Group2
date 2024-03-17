import express from "express";

const blogCategoryGridRoute = express.Router();

blogCategoryGridRoute.get("/", (req, res) => {
  res.render("blog-category-grid");
});

export default blogCategoryGridRoute;
