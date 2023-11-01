const { Pool } = require('pg');
const fs = require('fs');

// Read Docker secrets
const readSecret = (secretName) => {
    try {
        return fs.readFileSync(`/run/secrets/${secretName}`, 'utf8').trim();
    } catch (err) {
        console.error(`Failed to read Docker secret: ${secretName}`);
        return null;
    }
};

const pool = new Pool({
    user: readSecret('POSTGRES_USER'),
    host: 'localhost',
    database: 'budget_buddy',
    password: readSecret('POSTGRES_PASSWORD'),
    port: 5432,
});

module.exports = pool;
