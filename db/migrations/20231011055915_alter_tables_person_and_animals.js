exports.up = function (knex) {
  return knex.schema
    .table("persons", function (table) {
      table.timestamps(true, true);
    })
    .table("animals", function (table) {
      table.timestamps(true, true);
    });
};
exports.down = function (knex) {
  return knex.schema
    .table("persons", function (table) {
      table.dropTimestamps();
    })
    .table("animals", function (table) {
      table.dropTimestamps();
    });
};
