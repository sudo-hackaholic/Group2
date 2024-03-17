import express from "express";

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  res.render("page-login", {
    errors: "errors",
  });
});

export default loginRouter;
