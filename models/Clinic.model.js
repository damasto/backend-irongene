const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const clinicSchema = new Schema (
    {
        "clinicName": String,
        "clinicSlug": String,
        "description": String,
        "location": String
    }
)

const Clinic = mongoose.models("Clinic", clinicSchema);
module.exports = Clinic;