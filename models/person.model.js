const { Model } = require("objection");
const knex = require("knex");
const dbConfig = require("../knexfile");
const db = knex(dbConfig.development);
Model.knex(db);
const Animal = require("./animal.model");

class Person extends Model {
  static get tableName() {
    return "persons";
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        email: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string" },
        age: { type: "number" },
      },
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Animal,
        join: {
          from: "persons.id",
          to: "animals.ownerId",
        },
      },
    };
  }
}

module.exports = Person;
