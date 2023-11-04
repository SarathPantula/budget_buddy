const transactionTypeRepo = require('../repo/transactionTypeRepo');

class TransactionTypeManager {
    constructor(repo) {
        this.repo = repo;
    }

    async getAllTransactionTypes() {
        return await this.repo.getAllTransactionTypes();
    }

    async getTransactionTypeById(id) {
        return await this.repo.getTransactionTypeById(id);
    }

    async createTransactionType(name) {
        return await this.repo.createTransactionType(name);
    }

    async updateTransactionType(id, name) {
        return await this.repo.updateTransactionType(id, name);
    }

    async deleteTransactionType(id) {
        return await this.repo.deleteTransactionType(id);
    }
}

module.exports = new TransactionTypeManager(transactionTypeRepo);