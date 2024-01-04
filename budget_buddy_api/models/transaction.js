const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model {}

Transaction.init({
    TransactionID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    AccountID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Accounts',
            key: 'AccountID'
        }
    },
    CategoryID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'CategoryID'
        }
    },
    TransactionTypeID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'TransactionTypes',
            key: 'TransactionTypeID'
        }
    },
    Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Amount can not be left blank.'
            },
            notNull: {
                msg: 'Amount is required.'
            },
            isDecimal: {
                msg: 'Amount must be a decimal number.'
            },
            min: {
                args: [0.01],
                msg: 'Amount must be greater than 0.'
            }
        }
    },
    Note: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 500],
                msg: 'Memo must be less than 500 characters in length.'
            }
        }
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: 'Date must be a valid date.'
            }
        }
    },
    IsRecurring: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    DestinationAccountID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Accounts',
            key: 'AccountID'
        }
    },
}, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'Transactions',
    timestamps: false
});

Transaction.associations = (models) => {
    Transaction.belongsTo(models.Account, {
        foreignKey: 'AccountID'
    });
    Transaction.belongsTo(models.Category, {
        foreignKey: 'CategoryID'
    });
    Transaction.belongsTo(models.TransactionType, {
        foreignKey: 'TransactionTypeID'
    });
    Transaction.belongsTo(models.Account, {
        foreignKey: 'DestinationAccountID'
    });
}

module.exports = Transaction;