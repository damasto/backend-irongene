const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking.model");
const mongoose = require("mongoose")



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
    const { date, timeSlot, procedure } = req.body;
    console.log("body", req.body)

    console.log(_id)

    const newBooking = {
        clinic: clinicId,
        user: _id,
        date: date,
        timeSlot: timeSlot,
        procedure: procedure
    }

    try {
        const booking = await Booking.create(newBooking);
        res.status(201).json(booking)
    } catch (err) {
        next(err)
    }
});

router.put("/:bookingId", async(req, res, next) => {
    const {bookingId} = req.params;
    const update = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(bookingId)) {
            return res.status(400).json({message: "Invalid ID format"})
        }
    
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(bookingId, update, {new: true})

        if(!updatedBooking) {
            res.status(400).json({message: "Booking not found"})
        }

        res.status(200).json(updatedBooking)
    } catch(err) {
        next(err)
    }
})

module.exports = router