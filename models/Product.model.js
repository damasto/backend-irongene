const { Schema, model } = require("mongoose")

/*
product needs:
title
description
price
rating
connection to a procedure
image
*/

//NOTE Create a procedures model

const productSchema = new Schema ({
    "productTitle": {
        type: String,
        required: true
    },
    "description": { 
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "rating": {
        type: Number,
        default: 0
    },
    "procedure": {
        type: Schema.Types.ObjectId,
        ref: "Procedure",
        required: true
    }

});

const Product = model("Product", productSchema);
module.exports = Product;