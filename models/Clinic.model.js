const {Schema, model} = require("mongoose")

const clinicSchema = new Schema (
    {
        "clinicName": String,
        "clinicSlug": String,
        "description": String,
        "location": String
    }
)

const Clinic = model("Clinic", clinicSchema);
module.exports = Clinic;