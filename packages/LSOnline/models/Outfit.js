'use strict'
module.exports = (sequelize, DataTypes) => {
  let Outfit = sequelize.define('Outfit', {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    blends: DataTypes.STRING,
    features: DataTypes.STRING,
    components: DataTypes.STRING,
    textures: DataTypes.STRING,
    overlays: DataTypes.STRING,
    hairColor: DataTypes.STRING,
    decorations: DataTypes.STRING
  }, {})
  Outfit.associate = function (models) {
    Outfit.belongsTo(models.character, { foreignKey: 'owner' })
  }
  return Outfit
}
