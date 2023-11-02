const AvatarRepo = require('../repo/avatarRepo');

class AvatarController {

    async getAllAvatars(req, res) {
        try {
            const avatars = await AvatarRepo.getAllAvatars();
            res.status(200).json(avatars);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAvatarById(req, res) {
        try {
            const id = req.params.id;
            const avatar = await AvatarRepo.getAvatarById(id);
            res.status(200).json(avatar);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAvatarByTypeID(req, res) {
        try {
            const avatarTypeID = req.params.avatarTypeID;
            const avatar = await AvatarRepo.getAvatarByTypeID(avatarTypeID);
            res.status(200).json(avatar);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createAvatar(req, res) {
        try {
            const name = req.body.name;
            const avatarTypeID = req.body.avatarTypeID;
            const imageURL = req.body.imageURL;
            const avatar = await AvatarRepo.createAvatar(name, avatarTypeID, imageURL);
            res.status(200).json(avatar);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateAvatar(req, res) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            const avatarTypeID = req.body.avatarTypeID;
            const imageURL = req.body.imageURL;
            const avatar = await AvatarRepo.updateAvatar(id, name, avatarTypeID, imageURL);
            res.status(200).json(avatar);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteAvatar(req, res) {
        try {
            const id = req.params.id;
            const avatar = await AvatarRepo.deleteAvatar(id);
            res.status(200).json(avatar);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new AvatarController();