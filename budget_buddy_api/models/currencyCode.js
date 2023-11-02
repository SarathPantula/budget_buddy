const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class CurrencyCode extends Model { }

CurrencyCode.init({
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    CurrencyCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'CurrencyCode',
    tableName: 'CurrencyCodes',
    timestamps: true
});

module.exports = CurrencyCode;