'use strict'

module.exports = (sequelize, DataTypes) => {
  const Info = sequelize.define('info', {
     user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    currLevel : DataTypes.INTEGER,
    highestLevel : DataTypes.INTEGER,
    deaths : DataTypes.INTEGER,
    difficulty : DataTypes.STRING,
    sound : DataTypes.BOOLEAN,
    farmLevel: DataTypes.INTEGER,
    farmWaterCount: DataTypes.INTEGER,
    waterWellLevel: DataTypes.INTEGER,
  }, {
    underscored: true
  });
  return Info;
};
