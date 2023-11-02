const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

// Read Docker secrets
const readSecret = (secretName) => {
    try {
        const pathToSecret = path.join(__dirname, `../../budget_buddy_db/secrets/${secretName}`);
        return fs.readFileSync(pathToSecret, 'utf8').trim();
    } catch (err) {
        console.error(`Failed to read Docker secret: ${secretName}`, err);
        return null;
    }
};

// Azure SQL connection configuration using Sequelize
const sequelize = new Sequelize({
    dialect: 'mssql',
    dialectModule: require('tedious'),
    dialectOptions: {
        options: {
            encrypt: true,
            enableArithAbort: true
        }
    },
    host: readSecret('db_server.txt'),
    database: readSecret('db_name.txt'),
    username: readSecret('db_user.txt'),
    password: readSecret('db_password.txt')
});

// Test connection
sequelize.authenticate()
    .then(() => console.log("Connected to Azure SQL Database"))
    .catch(err => console.error('Database Connection Failed! Bad Config:', err));

module.exports = sequelize;