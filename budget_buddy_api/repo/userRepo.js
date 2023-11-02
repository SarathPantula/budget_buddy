const User = require('../models/user');

class UserRepo {
    constructor(model) {
        this.model = model;
    }

    async getAllUsers() {
        return await this.model.findAll();
    }

    async getUserById(id) {
        return await this.model.findByPk(id);
    }

    async getUserByEmail(email) {
        return await this.model.findOne({ where: { Email: email } });
    }

    async createUser(name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive) {
        return await this.model.create({
            Name: name,
            Email: email,
            LoginMethod: loginMethod,
            PhoneNumber: phoneNumber,
            PhotoURL: photoURL,
            DateJoined: dateJoined,
            LastLogin: lastLogin,
            IsActive: isActive
        });
    }

    async updateUser(id, name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive) {
        const user = await this.model.findByPk(id);
        user.Name = name;
        user.Email = email;
        user.LoginMethod = loginMethod;
        user.PhoneNumber = phoneNumber;
        user.PhotoURL = photoURL;
        user.DateJoined = dateJoined;
        user.LastLogin = lastLogin;
        user.IsActive = isActive;
        await user.save();
        return user;
    }

    async deleteUser(id) {
        const user = await this.model.findByPk(id);
        await user.destroy();
        return user;
    }
}

module.exports = new UserRepo(User);