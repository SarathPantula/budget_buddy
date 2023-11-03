const CategoryTypeManager = require('../managers/categoryTypeManager');

class CategoryTypeController {
    constructor(manager) {
        this.manager = manager;
    }

    async getAllCategoryTypes(req, res) {
        try {
            const categoryTypes = await this.manager.getAllCategoryTypes();
            res.status(200).json(categoryTypes);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getCategoryTypeById(req, res) {
        try {
            const categoryType = await this.manager.getCategoryTypeById(req.params.id);
            res.status(200).json(categoryType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createCategoryType(req, res) {
        try {
            const categoryType = await this.manager.createCategoryType(req.body.name);
            res.status(201).json(categoryType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateCategoryType(req, res) {
        try {
            const categoryType = await this.manager.updateCategoryType(req.params.id, req.body.name);
            res.status(200).json(categoryType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteCategoryType(req, res) {
        try {
            const categoryType = await this.manager.deleteCategoryType(req.params.id);
            res.status(200).json(categoryType);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new CategoryTypeController(CategoryTypeManager);