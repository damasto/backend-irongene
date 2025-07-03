const {Schema, model} = require("mongoose")

const clinicSchema = new Schema (
    {
        "clinicName": String,
        "clinicSlug": String,
        "description": String,
        "location": String,
        "speciality": {
            type: String,
            enum: ["Neurogentic Integration & Implantation", "Synthetics Engineering", "Morphogentic Architecture"]
        },
        "procedures": {
            type: [{
                type: String,
                enum: [
                   "Craniofacial Biomatrix Transplantation (CBT)",
                   "Maxillodermal Reconstruction with Neural Reinnervation (MRNR)",
                   "Intracortical Neural Interface Implantation (INII)",
                   "Cerebral Electromechanical Integration Procedure (CEIP)",
                   "Myoskeletal Prosthetic Integration (MPI)",
                   "Neurokinetic Augmented Extremity Implantation (NALI)",
                   "Subretinal Optoelectronic Implantation (SOI)",
                   "Photonic Retinal Augmentation Surgery (PRAS)"
                ]
            }]
        }
    }
)

const Clinic = model("Clinic", clinicSchema);
module.exports = Clinic;