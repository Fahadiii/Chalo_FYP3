const dbconfig = require("./dbconfig");

module.exports = {
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.db,
  server: dbconfig.server,
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};
