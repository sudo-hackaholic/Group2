import express from "express";

const registerRoute = express.Router();

registerRoute.get("/", (req, res) => {
  res.render("page-register", {
    errors: "errors",
  });
});

export default registerRoute;
