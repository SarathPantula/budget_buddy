const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class AvatarType extends Model { }

AvatarType.init({
    AvatarTypeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'AvatarType',
    tableName: 'AvatarTypes',
    timestamps: false
});

module.exports = AvatarType;