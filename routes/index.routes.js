const express = require("express");
const router = express.Router();

const clinicRouter = require("./clinics.routes")

router.use("/clinics", clinicRouter)


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
