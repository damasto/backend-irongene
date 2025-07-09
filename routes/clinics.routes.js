const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
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
    const {clinicName} = req.body

    try {
        const clinicFound = await Clinic.findOne({clinicName});
        console.log("found", clinicFound)
        if(clinicFound) {
            res.status(400).json({message: "Clinic already exists"})
            return
        }
        const newClinic = await Clinic.create(req.body)
        res.status(201).json(newClinic)
    } catch (err) {
        console.log(err)
    }
});

router.put("/:clinicId", async (req, res, next) => {
    const {clinicId} = req.params
    const update = req.body

     if(!mongoose.Types.ObjectId.isValid(clinicId)) {
            return res.status(400).json({message: "Invalid ID format"})
        }

    try {
        if(update.hasOwnProperty("procedures")) {
            const updateProcedures = await Clinic.findByIdAndUpdate(
                clinicId,
                {$addToSet: {procedures: {$each: update.procedures}}},
                {new: true, runValidators: true}
            )
            res.status(200).json(updateProcedures)
        } else {
            const updateProcedures = await Clinic.findByIdAndUpdate(clinicId, update, {new: true})
            res.status(200).json(updateProcedures)
        }
    } catch(err) {
        next(err)
    }
})

router.get("/:clinicId", async(req,res, next) => {

    const {clinicId} = req.params

     if(!mongoose.Types.ObjectId.isValid(clinicId)) {
            return res.status(400).json({message: "Invalid ID format"})
        }

    try {
        const clinic = await Clinic.findById(clinicId);
        res.status(200).json(clinic)
    } catch (err) {
        next(err);
    }
});

router.get("/:clinicId/procedures", async(req,res, next) => {

    const {clinicId} = req.params


    try {
        const procedures = await Clinic.findById(clinicId).select("procedures");
        console.log(procedures)
        res.status(200).json(procedures)
    } catch (err) {
        next(err);
    }
});


module.exports = router