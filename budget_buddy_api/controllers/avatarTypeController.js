const avatarType = require('./models/avatarType');
const {
    getAllAvatarTypes,
    getAvatarTypeById,
    getAvatarTypeByName,
    createAvatarType,
    updateAvatarType,
    deleteAvatarType
} = require('./repo/avatarTypeRepo');

const getAvatarTypes = async (req, res) => {
    try {
        const avatarTypes = await getAllAvatarTypes();
        res.status(200).json(avatarTypes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const getAvatarTypeById = async (req, res) => {
    try {
        const avatarType = await getAvatarTypeById(req.params.id);
        res.status(200).json(avatarType);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const getAvatarTypeByName = async (req, res) => {
    try {
        const avatarType = await getAvatarTypeByName(req.params.name);
        res.status(200).json(avatarType);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const createAvatarType = async (req, res) => {
    try {
        const avatarType = await createAvatarType(req.body.name);
        res.status(201).json(avatarType);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const updateAvatarType = async (req, res) => {
    try {
        const avatarType = await updateAvatarType(req.params.id, req.body.name);
        res.status(200).json(avatarType);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const deleteAvatarType = async (req, res) => {
    try {
        const avatarType = await deleteAvatarType(req.params.id);
        res.status(200).json(avatarType);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getAvatarTypes,
    getAvatarTypeById,
    getAvatarTypeByName,
    createAvatarType,
    updateAvatarType,
    deleteAvatarType
};