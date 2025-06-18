const {Router} = require("express");
const router = Router();
const clinicRouter = require("./clinics.routes")

router.use("/clinics", clinicRouter)