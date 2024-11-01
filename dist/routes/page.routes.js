"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get("/", (req, res) => {
    res.status(200).render("index", { desc: "hello from home!" });
});
pageRouter.get("/about", (req, res) => {
    res.status(200).render("about", { desc: "hello from about!" });
});
pageRouter.get("/contact", (req, res) => {
    res.status(200).render("contact", { desc: "hello from contact!" });
});
exports.default = pageRouter;
