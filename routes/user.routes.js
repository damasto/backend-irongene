const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Booking = require("../models/Booking.model");
const mongoose = require("mongoose")
const { isAuthenticated } = require("../middleware/jwt.middleware");
const bcrypt = require("bcrypt");
const saltRounds = 10;


router.get("/", async(req, res, next) => { 
    try {
        const users = await User.find().select({createdAt:0, updatedAt:0, __v: 0, password:0});
        res.status(200).json(users)
    } catch(err) {
        next(err)
    }
})

router.delete("/:userId", async (req, res, next) => {
    const {userId} = req.params

    try {
        const deletedUser = await User.findByIdAndDelete(userId)
        res.status(200).json({message: "User successfully deleted"})
    } catch(err) {
        next(err)
    }
})

router.put("/:userId", async(req, res, next) => {
    const {userId} = req.params

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true, runValidators: true});
        res.status(200).json(updatedUser)
    } catch(err) {
        next(err)
    }
})

router.get("/user/role", isAuthenticated ,async(req, res, next) => {     
    const {_id} = req.payload;

    try {
        const user = await User.findById(_id).select("role");
        res.status(200).json(user)
    } catch(err) {
        next(err)
    }
})

router.get("/profile", isAuthenticated ,async(req, res, next) => {     
    const {_id} = req.payload;

    try {
        const user = await User.findById(_id).select("firstName lastName email");
        res.status(200).json(user)
    } catch(err) {
        next(err)
    }
})

router.get("/profile/bookings", isAuthenticated, async(req, res, next) => { 
    const {_id} = req.payload;
  
    try {
        const bookings = await Booking.find({user: _id}).populate("clinic");
        res.status(200).json(bookings)
    } catch(err) {
        next(err)
    }
});

router.get("/profile/:userId/bookings", async(req, res, next) => { 
    
    const {userId} = req.params;
    console.log(userId)

    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings)
    } catch(err) {
        next(err)
    }
});

router.put("/profile/email", isAuthenticated, async(req, res, next) => {     
    const {_id} = req.payload;
    const {newEmail, enteredPassword} = req.body

    try {
        const user = await User.findById(_id).select("password");
        const password = user.password
        console.log(password)
        const passwordCorrect = bcrypt.compareSync(enteredPassword, password);

        if (passwordCorrect) {
            const updatedEmail = await User.findByIdAndUpdate(_id, { email: newEmail });
            console.log(updatedEmail)
            res.status(200).json(updatedEmail);
        } else {
            res.status(401).json({message:"Password did not match"})
        }
    } catch (err) {
        next(err)
    }
});

router.put("/profile/password", isAuthenticated, async(req, res, next) => {     
    const {_id} = req.payload;
    const {currentPassword, newPassword} = req.body

    try {
        const user = await User.findById(_id).select("password");
        const password = user.password
        console.log(password)
        const passwordCorrect = bcrypt.compareSync(currentPassword, password);

        if (passwordCorrect) {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(newPassword, salt);
            const updatedPassword = await User.findByIdAndUpdate(_id, { password: hashedPassword });
            res.status(200).json({message: "Password successfully updated"});
        } else {
            res.status(401).json({message:"Password did not match"})
        }
    } catch (err) {
        next(err)
    }
});

router.delete("/profile", isAuthenticated, async (req, res, next) => {
    const {_id} = req.payload

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({message: "Invalid ID format"})
    }

    try {
        const deleteUser = await User.findByIdAndDelete(_id);
        const userBookings = await Booking.deleteMany({user: _id})
        console.log(userBookings, " deleted")
        res.status(200).json({message: "Account successfully deleted"})
        
    } catch(err) {
        next(err)
    }
})





module.exports = router;