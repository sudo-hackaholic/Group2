import express from "express";

const pageForgotPassword = express.Router();

pageForgotPassword.get("/", (req, res) => {
  res.render("page-forgot-password");
});

export default pageForgotPassword;
