const CategoryTypeRepo = require('../repo/categoryTypeRepo');

class CategoryTypeManager {
    constructor(repo) {
        this.repo = repo;
    }

    async getAllCategoryTypes() {
        return await this.repo.getAllCategoryTypes();
    }

    async getCategoryTypeById(id) {
        return await this.repo.getCategoryTypeById(id);
    }

    async createCategoryType(name) {
        return await this.repo.createCategoryType(name);
    }

    async updateCategoryType(id, name) {
        return await this.repo.updateCategoryType(id, name);
    }

    async deleteCategoryType(id) {
        return await this.repo.deleteCategoryType(id);
    }
}

module.exports = new CategoryTypeManager(CategoryTypeRepo);