const categoryManager = require('../managers/categoryManager');

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryManager.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryManager.getCategoryById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCategoryByUserId = async (req, res) => {
    try {
        const categories = await categoryManager.getCategoryByUserId(req.params.userId);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await categoryManager.createCategory(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const category = await categoryManager.updateCategory(req.params.id, req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await categoryManager.deleteCategory(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByUserId,
    createCategory,
    updateCategory,
    deleteCategory
};