const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/dbConfig');

class TransactionType extends Model {}

TransactionType.init({
    TransactionTypeID: {
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
            // Check for only letters
            checkCharacters(value) {
                if (!/^[a-zA-Z]+$/.test(value)) {
                    throw new Error('Name must only contain letters.');
                }
            }
        }
    }
}, {
    sequelize,
    modelName: 'TransactionType',
    tableName: 'TransactionTypes',
    timestamps: false
});

module.exports = TransactionType;