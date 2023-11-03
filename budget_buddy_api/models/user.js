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
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Email can not be left blank.'
            },
            notNull: {
                msg: 'Email is required.'
            },
            isEmail: {
                msg: 'Email must be a valid email address.'
            }
        }
    },
    LoginMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            onlyPhoneNumberWithISOCode(value) {
                if (!/^\+[1-9]\d{1,14}$/.test(value)) {
                    throw new Error('Phone number must be a valid phone number with ISO code.');
                }
            }
        }
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
    timestamps: false
});

module.exports = User;