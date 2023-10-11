const Animal = require("../models/animal.model");
const Person = require("../models/person.model");

const createPets = async (req, res) => {
  try {
    const { name, species, age } = req.body;
    const ownerId = req.user.id;
    const newPet = await Animal.query().insert({
      name,
      species,
      age,
      ownerId,
    });
    return res.status(201).json({ success: true, newPet: newPet });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

const detailsOwnerAndPets = async (req, res) => {
  try {
    const personsWithPets = await Person.query()
      .withGraphFetched("[pets]")
      .select("name", "email")
      .whereExists(Person.relatedQuery("pets"))
      .orderBy("name");
    return res
      .status(200)
      .json({ success: true, petsAndOwnerDetails: personsWithPets });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPets,
  detailsOwnerAndPets,
};
