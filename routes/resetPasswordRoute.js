import express from "express";

const resetPasswordRoute = express.Router();

resetPasswordRoute.get("/", (req, res) => {
  res.render("page-reset-password", {
    errors: "errors",
  });
});

export default resetPasswordRoute;
