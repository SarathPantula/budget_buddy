const AvatarType = require('../models/avatarType');

class AvatarTypeRepo {
    constructor(model) {
        this.model = model;
    }

    async getAllAvatarTypes() {
        return await this.model.findAll();
    }

    async getAvatarTypeById(id) {
        return await this.model.findByPk(id);
    }

    async createAvatarType(name) {
        return await this.model.create({ Name: name });
    }

    async updateAvatarType(id, name) {
        const avatarType = await this.model.findByPk(id);
        avatarType.Name = name;
        await avatarType.save();
        return avatarType;
    }

    async deleteAvatarType(id) {
        const avatarType = await this.model.findByPk(id);
        await avatarType.destroy();
        return avatarType;
    }
}

module.exports = new AvatarTypeRepo(AvatarType);