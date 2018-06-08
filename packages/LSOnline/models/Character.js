'use strict';
module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    money: DataTypes.INTEGER,
    admin: DataTypes.BOOLEAN
  }, {});
  Character.associate = function(models) {
    // associations can be defined here
  };
  return Character;
};