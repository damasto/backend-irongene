const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Booking = require("../models/Booking.model")


router.get("/", async(req, res, next) => { 
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch(err) {
        next(err)
    }
})

router.get("/profile/:userId", async(req, res, next) => { 
    const {userId} = req.params;

    try {
        const user = await User.findById(userId);
        res.status(200).json(user)
    } catch(err) {
        next(err)
    }
})

router.get("/profile/:userId/bookings", async(req, res, next) => { 
    
    const {userId} = req.params;
    console.log(userId)

    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings)
    } catch(err) {
        next(err)
    }
})


module.exports = router;