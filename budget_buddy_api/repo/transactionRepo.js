const transaction = require('../models/transaction');
const { Op } = require('sequelize');

class TransactionRepo {
    constructor(model) {
        this.model = model;
    }

    async getAllTransactions() {
        const transactions = await this.model.findAll();
        return transactions;
    }

    async getTransactionById(id) {
        const transaction = await this.model.findByPk(id);
        return transaction;
    }

    async getFilteredTransactions(filter) {
        let conditions = [];

        if (filter.UserID) {
            conditions.push({ UserID: filter.UserID });
        }

        if (filter.AccountIds && filter.AccountIds.length) {
            conditions.push({ AccountID: { [Op.in]: filter.AccountIds } });
        }

        if(filter.CategoryIds && filter.CategoryIds.length) {
            conditions.push({ CategoryID: { [Op.in]: filter.CategoryIds } });
        }

        if(filter.TransactionTypeIds && filter.TransactionTypeIds.length) {
            conditions.push({ TransactionTypeID: { [Op.in]: filter.TransactionTypeIds } });
        }

        if(filter.AmountMin && filter.AmountMax) {
            conditions.push({ Amount: { [Op.between]: [filter.AmountMin, filter.AmountMax] } });
        }

        if(filter.DateMin && filter.DateMax) {
            conditions.push({ Date: { [Op.between]: [filter.DateMin, filter.DateMax] } });
        }

        if(filter.DateMin && filter.DateMax) {
            conditions.push({ Date: { [Op.between]: [filter.DateMin, filter.DateMax] } });
        }

        if(filter.IsRecurring) {
            conditions.push({ IsRecurring: filter.IsRecurring });
        }

        if(filter.DestinationAccountIds && filter.DestinationAccountIds.length) {
            conditions.push({ DestinationAccountID: { [Op.in]: filter.DestinationAccountIds } });
        }

        const transactions = await this.model.findAll({
            where: {
                [Op.and]: conditions
            }
        });

        return transactions;
    }

    async createTransaction(transactionData) {
        const transaction = await this.model.create(transactionData);
        return transaction;
    }

    async updateTransaction(id, transactionData) {
        const transaction = await this.model.update(transactionData, {
            where: {
                TransactionID: id
            }
        });
        return transaction;
    }

    async deleteTransaction(id) {
        const transaction = await this.model.destroy({
            where: {
                TransactionID: id
            }
        });
        return transaction;
    }
}

module.exports = new TransactionRepo(transaction);