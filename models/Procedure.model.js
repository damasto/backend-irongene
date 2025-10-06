const { Schema, model } = require("mongoose")

const procedureSchema  = new Schema ({
    procedureName: [{
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
    }],
    required: true
});


const Procedure = model("Procedure", procedureSchema);
module.exports = Procedure;