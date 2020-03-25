'use strict'

module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('inventory', {
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      item_name: DataTypes.STRING,
      category_name: DataTypes.STRING,
      subCategory_name: DataTypes.STRING,
      slot_id : DataTypes.INTEGER,
      item_id : DataTypes.INTEGER,
      quantity : DataTypes.INTEGER,

    }, {
    underscored: true
  });
  return Inventory;
};
