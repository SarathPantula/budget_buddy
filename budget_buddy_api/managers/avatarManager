const avatarRepo = require('../repo/avatarRepo');

const getAllAvatars = async () => {
    return await avatarRepo.getAllAvatars();
}

const getAvatarById = async (id) => {
    return await avatarRepo.getAvatarById(id);
}

const getAvatarByTypeID = async (avatarTypeID) => {
    return await avatarRepo.getAvatarByTypeID(avatarTypeID);
}

const createAvatar = async (name, avatarTypeID, imageURL) => {
    return await avatarRepo.createAvatar(name, avatarTypeID, imageURL);
}

const updateAvatar = async (id, name, avatarTypeID, imageURL) => {
    return await avatarRepo.updateAvatar(id, name, avatarTypeID, imageURL);
}

const deleteAvatar = async (id) => {
    return await avatarRepo.deleteAvatar(id);
}

module.exports = {
    getAllAvatars,
    getAvatarById,
    getAvatarByTypeID,
    createAvatar,
    updateAvatar,
    deleteAvatar
};