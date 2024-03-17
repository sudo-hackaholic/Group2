import express from "express";

const shopInvoiceRoute = express.Router();

shopInvoiceRoute.get("/", (req, res) => {
  res.render("shop-invoice-1");
});

export default shopInvoiceRoute;
