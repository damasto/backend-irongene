const express = require("express");
const router = express.Router();
const Product =  require("../models/Product.model")



router.get("/", async(req, res, next) => {
    try {
        const products =  await Product.find();
        console.log(products);
        res.status(200).json(products);
    } catch(err) {
        next(err)
    }
})

module.exports = router