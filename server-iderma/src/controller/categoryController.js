import Category from '../database/models/category.js';

// Obtener todas las categorías
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            data: categories
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: 'Error getting categories',
            error: error.message
        });
    }
};

// Obtener una categoría por ID
export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({
                ok: false,
                status: 404,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            ok: true,
            status: 200,
            data: category
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: `Error getting category ${id}`,
            error: error.message
        });
    }
};