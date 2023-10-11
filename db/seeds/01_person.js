exports.seed = function (knex) {
  return knex("persons")
    .del()
    .then(function () {
      return knex("persons").insert([
        {
          name: "Abhishek",
          email: "abhi@example.com",
          password: "password123",
          age: 25,
        },
        {
          name: "Kaalu",
          email: "kaalu@example.com",
          password: "secret456",
          age: 30,
        },
      ]);
    });
};
