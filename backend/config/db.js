const { Sequelize } = require("sequelize");

// Database connection
const sequelize = new Sequelize("inventory_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
