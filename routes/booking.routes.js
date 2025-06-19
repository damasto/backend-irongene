const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking.model")



router.post("/:clinicId", async(req,res, next) => {
    const {clinicId} = req.params;

    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router