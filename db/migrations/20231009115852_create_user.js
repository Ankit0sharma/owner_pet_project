exports.up = (knex) => {
  return knex.schema
    .createTable("persons", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("password");
      table.integer("age");
    })
    .createTable("animals", (table) => {
      table.increments("id").primary();
      table
        .integer("ownerId")
        .unsigned()
        .references("id")
        .inTable("persons") // Referencing the persons table for the owner relationship
        .onDelete("CASCADE") // When a person is deleted, also delete associated animals
        .index();
      table.string("name");
      table.string("species");
      table.integer("age");
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("animals").dropTableIfExists("persons");
};
