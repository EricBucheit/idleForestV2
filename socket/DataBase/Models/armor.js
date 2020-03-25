'use strict'

module.exports = (sequelize, DataTypes) => {
  const Armor = sequelize.define('armor', {
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      item_name: DataTypes.STRING,
      category_name: DataTypes.STRING,
      subCategory_name: DataTypes.STRING,
      name: DataTypes.STRING,
      item_id : DataTypes.INTEGER,
      quantity : DataTypes.INTEGER,
    }, {
    underscored: true
  });
  return Armor;
};
