const express = require("express");
const router = express.Router();
const Procedure =  require("../models/Procedure.model");

router.get("/", async (req, res, next) => {
    try {
        const procedures = await Procedure.find();
        res.status(200).json(procedures);
    } catch(err) {
        next(err);
    }
});

router.post("/", async(req,res, next) => {
    const {procedureName} = req.body

    try {
        const procedureFound = await Clinic.findOne({procedureName});
        console.log("found", procedureFound)
        if(procedureFound) {
         return res.status(400).json({message: "Procedure already exists"})
            
        }
        const newProcedure = await Procedure.create(req.body)
        res.status(201).json(newProcedure)
    } catch (err) {
        console.log(err)
    }
});
