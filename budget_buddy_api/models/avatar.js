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
        unique: true
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