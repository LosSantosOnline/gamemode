'use strict'
module.exports = (sequelize, DataTypes) => {
  let Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
    admin: DataTypes.BOOLEAN,
    owner: DataTypes.INTEGER,
    sex: DataTypes.INTEGER,
    posX: DataTypes.FLOAT(10, 6),
    posY: DataTypes.FLOAT(10, 6),
    posZ: DataTypes.FLOAT(10, 6),
    dimension: DataTypes.INTEGER,
    exitType: DataTypes.STRING
  }, {})
  Character.associate = function (models) {
    Character.hasMany(models.outfit, { foreignKey: 'owner' })
  }
  return Character
}
