const userRoutes = require("express").Router();
const passport = require("passport");

const person = require("../controllers/person.controller");
const {registerPersonValidation, logInPersonValidation} = require("../middleware/person.data.val.middleware")


userRoutes.post("/create",registerPersonValidation ,person.registerPerson);
userRoutes.post("/login",logInPersonValidation ,person.logInPerson);


module.exports = userRoutes;
