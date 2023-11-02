const sql = require('mssql');
const fs = require('fs');

// Read Docker secrets
const readSecret = (secretName) => {
    try {
        console.log(`Attempting to read Docker secret: ${secretName}`);
        const temp = fs.readFileSync(`.../budget_buddy_db/secrets/${secretName}`, 'utf8').trim();
        console.log(`Successfully read Docker secret: ${secretName}`);
        return temp;
    } catch (err) {
        console.error(`Failed to read Docker secret: ${secretName}`);
        return null;
    }
};

// Azure SQL connection configuration
const config = {
    user: readSecret('db_user.txt'),
    password: readSecret('db_password.txt'),
    server: readServer('db_server.txt'), // Replace with your Azure SQL Server name
    database: readSecret('db_name.txt'),
    options: {
        encrypt: true, // Necessary for Azure SQL
        enableArithAbort: true
    }
};

const pool = new sql.ConnectionPool(config);
pool.connect()
    .then(() => console.log("Connected to Azure SQL Database"))
    .catch(err => console.error('Database Connection Failed! Bad Config:', err));

module.exports = pool;
