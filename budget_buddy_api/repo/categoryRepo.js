const category = require('../models/category');

class CategoryRepo {
    constructor(model) {
        this.model = model;
    }

    async getAllCategories() {
        return await this.model.findAll({
            where: {
                IsActive: true
            },
            order: [
                ['Name', 'ASC']
            ]
        });
    }

    async getCategoryById(id) {
        return await this.model.findByPk(id);
    }

    async getCategoryByUserId(userId) {
        return await this.model.findAll({
            where: {
                UserID: userId,
                IsActive: true
            },
            order: [
                ['Name', 'ASC']
            ]
        });
    }

    async createCategory(category) {
        return await this.model.create(category);
    }

    async updateCategory(id, category) {
        return await this.model.update(category, {
            where: {
                CategoryID: id
            }
        });
    }

    async deleteCategory(id) {
        return await this.model.destroy({
            where: {
                CategoryID: id
            }
        });
    }
}

module.exports = new CategoryRepo(category);