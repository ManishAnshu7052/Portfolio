const express = require("express");
const { sendEmailController } = require("../controllers/portfolioContoller");


//router objects
const router = express.Router();

//routes
router.post('/sendEmail', sendEmailController);

//export
module.exports = router;