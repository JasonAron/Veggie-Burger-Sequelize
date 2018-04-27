
// ========================================================================
// Import the ORM to create functions that will interact with the database.
// ========================================================================
module.exports = function (sequelize, dataTypes) {

  var Burger = sequelize.define("Burger", {
    name: {
      type: DataType.STRING,
      allowNull: false
    },
    devoured: {
      type: DateType.BOOLEAN,
      allowNull: false
    },
  });
  return Burger;
};
