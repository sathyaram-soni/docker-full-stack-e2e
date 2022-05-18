module.exports = {
  HOST: "crud-db",
  USER: "root",
  PASSWORD: "12345678",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
