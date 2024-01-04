const transactionRepo = require('../repo/transactionRepo');
const transactionFilter = require('../models/transactionFilter');

const transactionManager = class TransactionManager {
    constructor(repo) { 
        this.repo = repo;
    }

    async getAllTransactions() {
        const transactions = await this.repo.getAllTransactions();
        return transactions;
    }

    async getTransactionById(id) {
        const transaction = await this.repo.getTransactionById(id);
        return transaction;
    }

    async getFilteredTransactions(filter) {
        transactionFilter.validateAndFormat(filter);

        const transactions = await this.repo.getFilteredTransactions(filter);
        return transactions;
    }

    async createTransaction(transactionData) {
        const transaction = await this.repo.createTransaction(transactionData);
        return transaction;
    }

    async updateTransaction(id, transactionData) {
        const transaction = await this.repo.updateTransaction(id, transactionData);
        return transaction;
    }

    async deleteTransaction(id) {
        const transaction = await this.repo.deleteTransaction(id);
        return transaction;
    }
}

module.exports = new TransactionManager();