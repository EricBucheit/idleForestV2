'use strict'

module.exports = (sequelize, DataTypes) => {
  const levelItems = sequelize.define('levelItems', {
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      level : DataTypes.INTEGER,
      item_name: DataTypes.STRING,
      category_name: DataTypes.STRING,
      subCategory_name: DataTypes.STRING,
      slot_id : DataTypes.INTEGER,
      item_id : DataTypes.INTEGER,
      quantity : DataTypes.INTEGER,
      x: DataTypes.INTEGER,
      y: DataTypes.INTEGER,
    }, {
    timestamps: false,
    underscored: true
  });
  return levelItems;
};
