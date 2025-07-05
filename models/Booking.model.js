const { Schema, model } = require("mongoose")

const bookingSchema = new Schema({
    "clinic": {
        type: Schema.Types.ObjectId,
        ref: "Clinic",
        required: true
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    "date": {
        type: Date,
        required: true,
    },
    "timeSlot": {
        type: String,
        enum: ["09:00-12:00", "13:00-16:00", "16:00-19:00"],
        required: true
    },
    "procedure": {
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
        ],
        required: true
    },
    "status": {
        type: String,
        enum: ["Scheduled", "Cancelled"],
        default: "Scheduled",
        required: true
    }
});

const Booking = model("Booking", bookingSchema);
module.exports = Booking;