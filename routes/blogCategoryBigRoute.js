import express from "express";

const blogCategoryBigRoute = express.Router();

blogCategoryBigRoute.get("/", (req, res) => {
  res.render("blog-category-big");
});

export default blogCategoryBigRoute;
