const express = require('express');
const router = express.Router();
const productsController = require('./productsController');

router.get("/", async (req, res, next) => {
  try {
    const results = await productsController.getProducts();
    return res.status(200).send({ status: "OK", data: results });
  } catch (err) {
    return next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const result = await productsController.getProductById(productId);
    return res.status(200).send({ status: 'OK', data: result });
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const productDetails = req.body;
    const result = await productsController.saveProductDetails(productDetails);
    return res.status(201).send({ status: 'OK', data: result });
  } catch (err) {
    return next(err);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const result = await productsController.deleteProductById(productId);
    return res.status(200).send({ status: 'OK', data: result });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
