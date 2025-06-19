const express = require("express");
const router = express.Router();



router.post("/:clinicId/booking", async(req,res, next) => {

    const {clinicId} = req.params;
    res.send(clinicId)
        

})

module.exports = router