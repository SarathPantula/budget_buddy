const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class User extends Model { }

User.init({
    UserID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    LoginMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PhtotoURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DateJoined: {
        type: DataTypes.DATE,
        allowNull: true
    },
    LastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true
});

module.exports = User;