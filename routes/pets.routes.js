const petsRoutes = require("express").Router();
const passport = require("passport");

const pets = require("../controllers/animal.controller");
const { addPetsValidation } = require("../middleware/pets.data.val.middleware");

petsRoutes.post(
  "/addPets",
  addPetsValidation,
  passport.authenticate("jwt", { session: false }),
  pets.createPets
);
petsRoutes.get(
  "/get_details",
  passport.authenticate("jwt", { session: false }),
  pets.detailsOwnerAndPets
);

module.exports = petsRoutes;
