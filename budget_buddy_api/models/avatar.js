const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

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
        allowNull: false
    },
    ImageURL: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Avatar',
    tableName: 'Avatars',
    timestamps: true
});