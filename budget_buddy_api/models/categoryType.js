const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class CategoryType extends Model { }

CategoryType.init({
    CategoryTypeID: {
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
            onlyLetters(value) {
                if (!/^[a-zA-Z]+$/.test(value)) {
                    throw new Error('Name must only contain letters.');
                }
            }
        }
    }
}, {
    sequelize,
    modelName: 'CategoryType',
    tableName: 'CategoryTypes',
    timestamps: false
});