const express =require("express");
const productRouter = express.Router();

const productController = require("../controllers/product")

productRouter.route("/")
  .get(productController.getDetails)

  module.exports = productRouter;