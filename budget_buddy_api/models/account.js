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
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Name can not be left blank.'
            },
            notNull: {
                msg: 'Name is required.'
            },
            len: {
                args: [3, 50],
                msg: 'Name must be between 3 and 50 characters in length.'
            },
            // Check for only letters and numbers
            onlyLettersAndNumbers(value) {
                if (!/^[a-zA-Z0-9]+$/.test(value)) {
                    throw new Error('Name must only contain letters and numbers.');
                }
            }
        }
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
    LastUpdated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    DeactivatedDate: {
        type: DataTypes.DATE,
        allowNull: true
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