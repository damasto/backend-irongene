const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Booking = require("../models/Booking.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");


router.get("/", async(req, res, next) => { 
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch(err) {
        next(err)
    }
})

router.get("/profile", isAuthenticated ,async(req, res, next) => { 
    
    const {_id} = req.payload;

    console.log("req.payload:",req.payload)


    try {
        const user = await User.findById(_id).select("firstName lastName email");
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