const TransactionTypeManager = require('../managers/transactionTypeManager');

class TransactionTypeController {
    constructor(manager) {
        this.manager = manager;
    }

    async getAllTransactionTypes(req, res) {
        try {
            const transactionTypes = await this.manager.getAllTransactionTypes();
            res.status(200).json(transactionTypes);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getTransactionTypeById(req, res) {
        try {
            const transactionType = await this.manager.getTransactionTypeById(req.params.id);
            res.status(200).json(transactionType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createTransactionType(req, res) {
        try {
            const transactionType = await this.manager.createTransactionType(req.body.name);
            res.status(200).json(transactionType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateTransactionType(req, res) {
        try {
            const transactionType = await this.manager.updateTransactionType(req.params.id, req.body.name);
            res.status(200).json(transactionType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteTransactionType(req, res) {
        try {
            const transactionType = await this.manager.deleteTransactionType(req.params.id);
            res.status(200).json(transactionType);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new TransactionTypeController(TransactionTypeManager);