const express = require("express");
const router = express.Router();
const {isAuthenticated} = require("../middleware/jwt.middleware")

const clinicRouter = require("./clinics.routes")
router.use("/clinics", clinicRouter)

const bookingRouter = require("./booking.routes")
router.use("/bookings", isAuthenticated, bookingRouter)

const userRouter = require("./user.routes")
router.use("/users", userRouter)



module.exports = router;
