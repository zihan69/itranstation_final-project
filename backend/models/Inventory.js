const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inventory = sequelize.define("Inventory", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Inventory;
