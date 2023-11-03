const avatarTypeRepo = require('../repo/avatarTypeRepo');

const getAllAvatarTypes = async () => {
    return await avatarTypeRepo.getAllAvatarTypes();
}

const getAvatarTypeByID = async (avatarTypeID) => {
    return await avatarTypeRepo.getAvatarTypeByID(avatarTypeID);
}

const createAvatarType = async (name) => {
    return await avatarTypeRepo.createAvatarType(name);
}

const updateAvatarType = async (id, name) => {
    return await avatarTypeRepo.updateAvatarType(id, name);
}

const deleteAvatarType = async (avatarTypeID) => {
    return await avatarTypeRepo.deleteAvatarType(avatarTypeID);
}

module.exports = {
    getAllAvatarTypes,
    getAvatarTypeByID,
    createAvatarType,
    updateAvatarType,
    deleteAvatarType
};