const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const personValSchema = {
  //create person validation
  registerPerson: joi
    .object({
      name: joi
        .string()
        .min(3)
        .max(20)
        .message({
          "string.min": "{#label} should contain at least {#limit} character", //! label = userName dikhayega
          "string.max":
            "{#label} should contain not more than {#limit} character",
        })
        .required(),
      email: joi.string().email().message("invalid email address").required(),
      password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .onlyLatinCharacters()
        .messages({
          "password.minOfUppercase":
            "{#label} should contain at least {#min} uppercase character",
          "password.minOfSpecialCharacters":
            "{#label} should contain at least {#min} special character",
          "password.minOfLowercase":
            "{#label} should contain at least {#min} lowercase character",
          "password.minOfNumeric":
            "{#label} should contain at least {#min} numeric character",
          "password.noWhiteSpaces": "{#label} should not contain white spaces",
          "password.onlyLatinCharacters":
            "{#label} should contain only latin characters",
        })
        .required(),
      age: joi.number().required(),
    })
    .unknown(true),

  //!login validation
  logInPerson: joi
    .object({
      email: joi.string().email().message("invalid email address").required(),
      password: joi.string().required(),
    })
    .unknown(true),
};

module.exports = personValSchema;
