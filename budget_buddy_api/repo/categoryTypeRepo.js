const CategoryType = require('../models/categoryType');

class CategoryTypeRepo {
    constructor(model) {
        this.model = model;
    }

    async getAllCategoryTypes() {
        return await this.model.findAll();
    }

    async getCategoryTypeById(id) {
        return await this.model.findByPk(id);
    }

    async createCategoryType(name) {
        return await this.model.create({ Name: name });
    }

    async updateCategoryType(id, name) {
        const categoryType = await this.model.findByPk(id);
        categoryType.Name = name;
        await categoryType.save();
        return categoryType;
    }

    async deleteCategoryType(id) {
        const categoryType = await this.model.findByPk(id);
        await categoryType.destroy();
        return categoryType;
    }
}

module.exports = new CategoryTypeRepo(CategoryType);