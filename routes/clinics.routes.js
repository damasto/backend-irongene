const express = require("express");
const router = express.Router();
const Clinic = require("../models/Clinic.model")

router.get("/", async(req,res, next) => {
    try {
        const clinics = await Clinic.find();
        res.status(200).json(clinics)
    } catch (err) {
        console.log(err)
    }
});

router.post("/", async(req,res, next) => {
    try {
        const newClinic = await Clinic.create(req.body);
        res.status(201).json(newClinic)
    } catch (err) {
        console.log(err)
    }
});

router.get("/:clinicId", async(req,res, next) => {

    const {clinicId} = req.params

    try {
        const clinic = await Clinic.findById(clinicId);
        res.status(200).json(clinic)
    } catch (err) {
        next(err);
    }
});

router.post("/:clinicId/booking", async(req,res, next) => {

    const {clinicId} = req.params;
    
    try {
        const newClinic = await Clinic.create(req.body);
        res.status(201).json(newClinic)
    } catch (err) {
        next(err);
    }
});

module.exports = router