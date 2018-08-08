'use strict';

module.exports = (sequelize, DataTypes) => {
    let Character = sequelize.define('Character', {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        money: DataTypes.INTEGER,
        admin: DataTypes.BOOLEAN,
        owner: DataTypes.INTEGER,
        sex: DataTypes.INTEGER
    }, {});
    Character.associate = (models) => {
        // associations can be defined here
    };
    return Character;
};
