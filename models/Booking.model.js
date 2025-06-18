const {Schema, model} = require("mongoose")

const bookingSchema = new Schema({
    "clinic": {
        type: Schema.Types.ObjectId,
        ref: "Clinic"
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    "day": Date,
    "timeSlot": {
        type: String,
        enum: ["09:00-12:00", "13:00-16:00", "16:00-19:00"]
    }
});

const Booking = model("Booking", bookingSchema);
module.exports = Booking;