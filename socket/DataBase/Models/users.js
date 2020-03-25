'use strict'

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    password: {
      type: DataTypes.STRING,
      required: true
    },
    gold: DataTypes.INTEGER,
  }, {
    underscored: true
  });
  return Users;
};