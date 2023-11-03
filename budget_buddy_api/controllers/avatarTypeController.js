const AvatarTypeManager = require('../managers/avatarTypeManager');

class AvatarTypeController {

    async getAllAvatarTypes(req, res) {
        try {
            const avatarTypes = await AvatarTypeManager.getAllAvatarTypes();
            res.status(200).json(avatarTypes);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAvatarTypeById(req, res) {
        try {
            const id = req.params.id;
            const avatarType = await AvatarTypeManager.getAvatarTypeById(id);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createAvatarType(req, res) {
        try {
            const name = req.body.name;
            const avatarType = await AvatarTypeManager.createAvatarType(name);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateAvatarType(req, res) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            const avatarType = await AvatarTypeManager.updateAvatarType(id, name);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteAvatarType(req, res) {
        try {
            const id = req.params.id;
            const avatarType = await AvatarTypeManager.deleteAvatarType(id);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new AvatarTypeController();