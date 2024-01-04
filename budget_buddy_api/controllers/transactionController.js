const TransactionManager = require('../managers/transactionManager');

class TransactionController {
    constructor(manager) {
        this.manager = manager;
    }

    async getAllTransactions(req, res) {
        try {
            const transactions = await this.manager.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getTransactionById(req, res) {
        try {
            const transaction = await this.manager.getTransactionById(req.params.id);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getFilteredTransactions(req, res) {
        try {
            const transactions = await this.manager.getFilteredTransactions(req.query);
            res.status(200).json(transactions);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createTransaction(req, res) {
        try {
            const transaction = await this.manager.createTransaction(req.body);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateTransaction(req, res) {
        try {
            const transaction = await this.manager.updateTransaction(req.params.id, req.body);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteTransaction(req, res) {
        try {
            const transaction = await this.manager.deleteTransaction(req.params.id);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}