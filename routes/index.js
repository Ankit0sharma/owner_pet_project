const router = require("express").Router();

const userRoutes = require("./person.routes");
const petsRoutes = require("./pets.routes");

router.use("/person", userRoutes);
router.use("/pets", petsRoutes);

module.exports = router