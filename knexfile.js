// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    //I tried to use env module here sir but PG is not working properly with that
    connection: {
      database: "passport_jwt",
      user: "postgres",
      password:'bitcot',
      host: "localhost",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
