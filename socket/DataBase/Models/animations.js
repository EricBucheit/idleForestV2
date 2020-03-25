'use strict'

module.exports = (sequelize, DataTypes) => {
  const Animation = sequelize.define('animation', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img: DataTypes.STRING,
    hair : DataTypes.STRING,
    shirt : DataTypes.STRING,
    pants : DataTypes.STRING,
    boots : DataTypes.STRING,
    cape : DataTypes.STRING,
    tail : DataTypes.STRING,
    wings : DataTypes.STRING,
  }, {
    underscored: true
  });
  return Animation;
};
