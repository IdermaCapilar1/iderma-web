import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Category from './category.js';

const SubCategory = sequelize.define('SubCategory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING(255)
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
    tableName: 'sub_category',
    timestamps: true // Desactiva los timestamps si no los necesitas
});

// Establecer la relación
SubCategory.belongsTo(Category, { foreignKey: 'categoryId' });

export default SubCategory;