const { Model } = require("objection");

class Animal extends Model {
  static get tableName() {
    return "animals";
  }

  //This is only used for validation. I also used Joi validation also
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "species"],

      properties: {
        id: { type: "integer" },
        ownerId: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        species: { type: "string", minLength: 1, maxLength: 255 },
        age: { type: "number" },
      },
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    const Person = require("./person.model");

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: "animals.ownerId",
          to: "persons.id",
        },
      },
    };
  }
}

module.exports = Animal;
