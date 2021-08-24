module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("PGHOST", "localhost"),
        port: env.int("PGPORT", 7420),
        database: env("PGDATABASE", "strapi"),
        username: env("PGUSER", "strapi"),
        password: env("PGPASSWORD", "strapi"),
        schema: env("DATABASE_SCHEMA", "public"), // Not Required
        ssl: false,
      },
      options: {},
    },
  },
});
