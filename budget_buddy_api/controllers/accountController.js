const accountManager = require('../managers/accountManager');

class AccountController {

    async getAllAccounts(req, res) {
        try {
            const accounts = await accountManager.getAllAccounts();
            res.status(200).json(accounts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    async getAccountById(req, res) {
        try {
            const id = req.params.id;
            const account = await accountManager.getAccountById(id);
            res.status(200).json(account);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    async getAccountByUserID(req, res) {
        try {
            const userID = req.params.userID;
            const account = await accountManager.getAccountByUserID(userID);
            res.status(200).json(account);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    async getAccountByAccountTypeID(req, res) {
        try {
            const accountTypeID = req.params.accountTypeID;
            const account = await accountManager.getAccountByAccountTypeID(accountTypeID);
            res.status(200).json(account);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    async createAccount(req, res) {
        try {
            const userID = req.body.userID;
            const accountTypeID = req.body.accountTypeID;
            const name = req.body.name;
            const balance = req.body.balance;
            const avatarID = req.body.avatarID;
            const account = await accountManager.createAccount(userID, accountTypeID, name, balance, avatarID);
            res.status(200).json(account);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    async updateAccount(req, res) {
        try {
            const id = req.params.id;
            const userID = req.body.userID;
            const accountTypeID = req.body.accountTypeID;
            const name = req.body.name;
            const balance = req.body.balance;
            const avatarID = req.body.avatarID;
            const account = await accountManager.updateAccount(id, userID, accountTypeID, name, balance, avatarID);
            res.status(200).json(account);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    async deleteAccount(req, res) {
        try {
            const id = req.params.id;
            const account = await accountManager.deleteAccount(id);
            res.status(200).json(account);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = new AccountController();