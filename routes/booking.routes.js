const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");


router.get("/", async(req,res, next) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch(err) {
        next(err)
    }
})

router.post("/:clinicId", async (req, res, next) => {
    const { clinicId } = req.params;
    const { _id } = req.payload
    const { date, timeSlot } = req.body;

    const newBooking = {
        clinic: clinicId,
        user: _id,
        date: date,
        timeSlot: timeSlot,
    }

    try {
        const booking = await Booking.create(newBooking);
        res.status(201).json(booking)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router