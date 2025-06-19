const express = require("express");
const router = express.Router();
const User = require("../models/User.model")


router.get("/", async(req, res, next) => { 
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch(err) {
        console.log(err)
    }
})

router.get("/profile/:userId", async(req, res, next) => { 
    const {userId} = req.params;

    try {
        const user = await User.findById(userId);
        res.status(200).json(user)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;