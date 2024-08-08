// En models/category.js
import { DataTypes } from 'sequelize';
import sequelize from '../models/database.js';
// import Product from './product.js';

const Category = sequelize.define(
	'Category',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(255)
		},
		url: {
			type: DataTypes.STRING(255)
		}
	},
	{
		tableName: 'category' // Desactiva los timestamps si no los necesitas
	}
);

// Category.hasMany(Product, { foreignKey: 'categoryId' });

export default Category;
