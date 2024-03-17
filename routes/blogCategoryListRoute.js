import express from "express";

const blogCategoryListRoute = express.Router();

blogCategoryListRoute.get("/", (req, res) => {
  res.render("blog-category-list");
});

export default blogCategoryListRoute;
