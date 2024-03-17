import express from "express";

const pagePrivacyPolicyRoute = express.Router();

pagePrivacyPolicyRoute.get("/", (req, res) => {
  res.render("page-privacy-policy");
});

export default pagePrivacyPolicyRoute;
