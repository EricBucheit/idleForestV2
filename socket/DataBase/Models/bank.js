'use strict'

module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('bank', {
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      slot_id : DataTypes.INTEGER,
      item_name: DataTypes.STRING,
      category_name: DataTypes.STRING,
      subCategory_name: DataTypes.STRING,
      item_id : DataTypes.INTEGER,
      quantity : DataTypes.INTEGER,

    }, {
    underscored: true
  });
  return Bank;
};
