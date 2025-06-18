const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const bookingSchema = new Schema({
    "clinic": {
        type: Schema.Types.ObjectId,
        ref: "Clinic"
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

})