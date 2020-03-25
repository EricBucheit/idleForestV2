'use strict'

module.exports = (sequelize, DataTypes) => {
  const Farm = sequelize.define('farm', {
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      item_name: DataTypes.STRING,
      category_name: DataTypes.STRING,
      subCategory_name: DataTypes.STRING,
      slot_id : DataTypes.INTEGER,
      item_id : DataTypes.INTEGER,
      level : DataTypes.INTEGER
    }, {
    underscored: true
  });
  return Farm;
};
