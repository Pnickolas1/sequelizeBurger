module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define('burgers', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		burger_name : {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		data: {
			type: DataTypes.DATE
		}
	});

	return Burger;
};