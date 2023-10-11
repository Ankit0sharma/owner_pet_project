const petsSchemaVal = require("../validations/pets/pets.schema.val");

module.exports = {
  addPetsValidation: async (req, res, next) => {
    let isValid = await petsSchemaVal.createPets.validate(req.body, {
      aboutEarly: false,
    });
    if (isValid.error) {
      res.status(403).json({
        success: false,
        message: isValid.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
