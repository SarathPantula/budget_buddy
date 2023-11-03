const accountRepo = require('../repo/accountRepo');

const getAllAccounts = async () => {
    return await accountRepo.getAllAccounts();
}

const getAccountById = async (id) => {
    return await accountRepo.getAccountById(id);
}

const getAccountByUserID = async (userID) => {
    return await accountRepo.getAccountByUserID(userID);
}

const getAccountByAccountTypeID = async (accountTypeID) => {
    return await accountRepo.getAccountByAccountTypeID(accountTypeID);
}

const createAccount = async (userID, name, initialBalance, currentBalance, avatarID, accountTypeID, isActive, dateCreated) => {
    return await accountRepo.createAccount(userID, name, initialBalance, currentBalance, avatarID, accountTypeID, isActive, dateCreated);
}

const updateAccount = async (id, userID, name, initialBalance, currentBalance, avatarID, accountTypeID, isActive, dateCreated) => {
    return await accountRepo.updateAccount(id, userID, name, initialBalance, currentBalance, avatarID, accountTypeID, isActive, dateCreated);
}

const deleteAccount = async (id) => {
    return await accountRepo.deleteAccount(id);
}

module.exports = {
    getAllAccounts,
    getAccountById,
    getAccountByUserID,
    getAccountByAccountTypeID,
    createAccount,
    updateAccount,
    deleteAccount
};