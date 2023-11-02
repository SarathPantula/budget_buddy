const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Avatar = require('./avatar');

class Account extends Model { }

Account.init({
    AccountID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    UserID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'UserID'
        }
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    InitialBalance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    CurrentBalance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    AvatarID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Avatars',
            key: 'AvatarID'
        }
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    DateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AvatarID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Avatar,
            key: 'AvatarID'
        }
    }
}, {
    sequelize,
    modelName: 'Account',
    tableName: 'Accounts',
    timestamps: false
});

Account.belongsTo(Avatar,
    {
        foreignKey: 'AvatarID',
        as: 'Avatar'
    });
    
module.exports = Account;