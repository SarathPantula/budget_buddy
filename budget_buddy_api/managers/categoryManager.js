const CategoryRepo = require('../repo/categoryRepo');

class CategoryManager {
    constructor(repo) {
        this.repo = repo;
    }

    async getAllCategories() {
        return await this.repo.getAllCategories();
    }

    async getCategoryById(id) {
        return await this.repo.getCategoryById(id);
    }

    async getCategoryByUserId(userId) {
        return await this.repo.getCategoryByUserId(userId);
    }

    async createCategory(category) {
        return await this.repo.createCategory(category);
    }

    async updateCategory(id, category) {
        return await this.repo.updateCategory(id, category);
    }

    async deleteCategory(id) {
        return await this.repo.deleteCategory(id);
    }
}

module.exports = new CategoryManager(CategoryRepo);