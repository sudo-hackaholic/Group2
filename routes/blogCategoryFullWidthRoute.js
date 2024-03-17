import express from "express";

const blogCategoryFullwidthRoute = express.Router();

blogCategoryFullwidthRoute.get("/", (req, res) => {
  res.render("blog-category-fullwidth");
});

export default blogCategoryFullwidthRoute;
