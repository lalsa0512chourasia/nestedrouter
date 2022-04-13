const express = require("express");
const router = express.Router();  //which allows to create child routes or endpoint 
const productRouter = require("./product")

router.use("/product", productRouter); //append the child routes

// router.use("/employee", employeeRouter)

module.exports = router;