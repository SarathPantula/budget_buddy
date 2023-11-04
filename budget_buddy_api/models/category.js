const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Category extends Model { }

Category.init({
    CategoryID: {
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
            // Check for only letters and spaces and hyphens and apostrophes and periods and commas and ampersands and numbers
            checkCharacters(value) {
                if (!/^[a-zA-Z\s\-\.\,\&\']+$/.test(value)) {
                    throw new Error('Name must only contain letters and spaces and hyphens and apostrophes and periods and commas and ampersands and numbers.');
                }
            }
        }
    },
    CategoryTypeID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'CategoryTypes',
            key: 'CategoryTypeID'
        }
    },
    UserID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'UserID'
        }
    },
    AvatarID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Avatars',
            key: 'AvatarID'
        }
    },
    IsSystemPrompted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
    modelName: 'Category',
    tableName: 'Categories',
    timestamps: false
});

Category.associate = (models) => {
    Category.belongsTo(models.CategoryType, {
        foreignKey: 'CategoryTypeID'
    });
    Category.belongsTo(models.User, {
        foreignKey: 'UserID'
    });
    Category.belongsTo(models.Avatar, {
        foreignKey: 'AvatarID'
    });
    Category.hasMany(models.Transaction, {
        foreignKey: 'CategoryID'
    });
};

module.exports = Category;