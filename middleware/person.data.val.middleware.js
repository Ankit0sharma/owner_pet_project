const personValSchema = require("../validations/person/person.schema.val");

module.exports = {
  registerPersonValidation: async (req, res, next) => {
    let isValid = await personValSchema.registerPerson.validate(req.body, {
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
  logInPersonValidation: async (req, res, next) => {
    let isValid = await personValSchema.logInPerson.validate(req.body, {
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
