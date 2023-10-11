const joi = require("joi");

const petsSchemaVal = {
  createPets: joi
    .object({
      name: joi.string().required(),
      species: joi.string().required(),
      age: joi.number().required(),
    })
    .unknown(true),
};
module.exports = petsSchemaVal;
