'use strict'

module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define('skills', {
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		name: DataTypes.STRING,
		skill_id : DataTypes.INTEGER,
		value : DataTypes.INTEGER,
		current : DataTypes.INTEGER,
		boost : DataTypes.INTEGER,
		xp : DataTypes.INTEGER,
		delayTime: DataTypes.INTEGER,
		speed: DataTypes.INTEGER,
		threshold : DataTypes.INTEGER,
    }, {
    underscored: true
  });
  return Skills;
};
