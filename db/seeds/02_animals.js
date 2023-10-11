exports.seed = function (knex) {
  return knex("animals")
    .del()
    .then(function () {
      return knex("animals").insert([
        { ownerId: 1, name: "Fluffy", species: "Cat", age: 3 },
        { ownerId: 2, name: "Rex", species: "Dog", age: 2 },
        { ownerId: 1, name: "Whiskers", species: "Cat", age: 5 },
      ]);
    });
};
