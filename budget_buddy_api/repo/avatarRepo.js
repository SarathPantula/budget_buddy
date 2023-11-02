const Avatar = require('../models/avatar');

class AvatarRepo {
    constructor(model) {
        this.model = model;
    }

    async getAllAvatars() {
        return await this.model.findAll();
    }

    async getAvatarById(id) {
        return await this.model.findByPk(id);
    }

    async getAvatarByTypeID(avatarTypeID) {
        return await this.model.findAll({ where: { AvatarTypeID: avatarTypeID } });
    }

    async createAvatar(name, avatarTypeID, imageURL) {
        return await this.model.create({
            Name: name,
            AvatarTypeID: avatarTypeID,
            ImageURL: imageURL
        });
    }

    async updateAvatar(id, name, avatarTypeID, imageURL) {
        const avatar = await this.model.findByPk(id);
        avatar.Name = name;
        avatar.AvatarTypeID = avatarTypeID;
        avatar.ImageURL = imageURL;
        await avatar.save();
        return avatar;
    }

    async deleteAvatar(id) {
        const avatar = await this.model.findByPk(id);
        await avatar.destroy();
        return avatar;
    }
}

module.exports = new AvatarRepo(Avatar);