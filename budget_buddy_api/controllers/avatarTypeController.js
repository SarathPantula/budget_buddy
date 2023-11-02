const AvatarTypeRepo = require('../repo/avatarTypeRepo');

class AvatarTypeController {

    async getAllAvatarTypes(req, res) {
        try {
            const avatarTypes = await AvatarTypeRepo.getAllAvatarTypes();
            res.status(200).json(avatarTypes);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAvatarTypeById(req, res) {
        try {
            const id = req.params.id;
            const avatarType = await AvatarTypeRepo.getAvatarTypeById(id);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createAvatarType(req, res) {
        try {
            const name = req.body.name;
            const avatarType = await AvatarTypeRepo.createAvatarType(name);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateAvatarType(req, res) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            const avatarType = await AvatarTypeRepo.updateAvatarType(id, name);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteAvatarType(req, res) {
        try {
            const id = req.params.id;
            const avatarType = await AvatarTypeRepo.deleteAvatarType(id);
            res.status(200).json(avatarType);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new AvatarTypeController();