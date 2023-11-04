const userManager = require('../managers/userManager');

class UserController {

    async getAllUsers(req, res) {
        try {
            const users = await userManager.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await userManager.getUserById(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getUserByEmail(req, res) {
        try {
            const email = req.params.email;
            const user = await userManager.getUserByEmail(email);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createUser(req, res) {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const loginMethod = req.body.loginMethod;
            const phoneNumber = req.body.phoneNumber;
            const photoURL = req.body.photoURL;
            const dateJoined = req.body.dateJoined;
            const lastLogin = req.body.lastLogin;
            const isActive = req.body.isActive;
            const user = await userManager.createUser(name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            const email = req.body.email;
            const loginMethod = req.body.loginMethod;
            const phoneNumber = req.body.phoneNumber;
            const photoURL = req.body.photoURL;
            const dateJoined = req.body.dateJoined;
            const lastLogin = req.body.lastLogin;
            const isActive = req.body.isActive;
            const user = await userManager.updateUser(id, name, email, loginMethod, phoneNumber, photoURL, dateJoined, lastLogin, isActive);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const user = await userManager.deleteUser(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new UserController();