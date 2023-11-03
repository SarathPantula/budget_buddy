const userRepo = require('../repo/userRepo');

const getAllUsers = async () => {
    return await userRepo.getAllUsers();
}

const getUserById = async (id) => {
    return await userRepo.getUserById(id);
}

const getUserByEmail = async (email) => {
    return await userRepo.getUserByEmail(email);
}

const createUser = async (name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive) => {
    return await userRepo.createUser(name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive);
}

const updateUser = async (id, name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive) => {
    return await userRepo.updateUser(id, name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive);
}

const deleteUser = async (id) => {
    return await userRepo.deleteUser(id);
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};