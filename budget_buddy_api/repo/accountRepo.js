const Account = require('../models/account');
const Avatar = require('../models/avatar');

class AccountRepo {
    constructor(model) {
        this.model = model;
    }

    async getAllAccounts() {
        return await this.model.findAll({
            include: [{
                model: Avatar,
                as: 'Avatar'
            }]
        });
    }

    async getAccountById(id) {
        return await this.model.findByPk(
            id, {
            include: [{
                model: Avatar,
                as: 'Avatar'
            }]
        });
    }

    async getAccountByUserID(userID) {
        return await this.model.findAll({
            where: { UserID: userID },
            include: [{
                model: Avatar,
                as: 'Avatar'
            }]
        });
    }

    async getAccountByAccountTypeID(accountTypeID) {
        return await this.model.findAll({
            where: { AccountTypeID: accountTypeID },
            include: [{
                model: Avatar,
                as: 'Avatar'
            }]
        });
    }

    async createAccount(userID, name, initialBalance, currentBalance, avatarID, accountTypeID, isActive, dateCreated) {
        return await this.model.create({
            UserID: userID,
            Name: name,
            InitialBalance: initialBalance,
            CurrentBalance: currentBalance,
            AvatarID: avatarID,
            AccountTypeID: accountTypeID,
            IsActive: isActive,
            DateCreated: dateCreated
        });
    }

    async updateAccount(id, userID, name, initialBalance, currentBalance, avatarID, accountTypeID, isActive, dateCreated) {
        const account = await this.model.findByPk(id);
        account.UserID = userID;
        account.Name = name;
        account.InitialBalance = initialBalance;
        account.CurrentBalance = currentBalance;
        account.AvatarID = avatarID;
        account.AccountTypeID = accountTypeID;
        account.IsActive = isActive;
        account.DateCreated = dateCreated;
        await account.save();
        return account;
    }

    async deleteAccount(id) {
        const account = await this.model.findByPk(id);
        await account.destroy();
        return account;
    }
}

module.exports = new AccountRepo(Account);