const {Schema, model} = require("mongoose")

const clinicSchema = new Schema (
    {
        "clinicName": String,
        "clinicSlug": String,
        "description": String,
        "location": String,
        "image": {
            type: String,
            default: ""
        }
    }
)

const Clinic = model("Clinic", clinicSchema);
module.exports = Clinic;