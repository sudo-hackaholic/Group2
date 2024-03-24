import { validationResult } from "express-validator";
import loginService from "../models/loginAdminModel";

let getPageLoginAdmin = (req, res) => {
    return res.render("sign-in", {
        errors: req.flash("errors")
    });
};

let handleLogin = async (req, res) => {
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/sign-in");
    }

    try {
        await loginService.handleLogin(req.body.username, req.body.password);
        return res.redirect("/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/sign-in");
    }
};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/sign-in");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/sign-in");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect("/sign-in");
    });
};

export default {
    getPageLoginAdmin,
    handleLogin,
    checkLoggedIn,
    checkLoggedOut,
    postLogOut
};