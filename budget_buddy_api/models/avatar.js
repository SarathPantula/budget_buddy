const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const AvatarType = require('./avatarType');

class Avatar extends Model { }

Avatar.init({
    AvatarID: {
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
    AvatarTypeID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'AvatarTypes',
            key: 'AvatarTypeID'
        }
    },
    ImageURL: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Avatar',
    tableName: 'Avatars',
    timestamps: false
});

Avatar.belongsTo(AvatarType, 
    { 
        foreignKey: 'AvatarTypeID',
        as: 'AvatarType'
    });

module.exports = Avatar;