module.exports = {
  db: "chalo",
  password: "123456",
  server: "localhost",
  user: "root",
  port: "5000",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
