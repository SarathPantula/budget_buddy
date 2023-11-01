const pool = require('./config/dbConfig');

const getAllUsers = async () => {
    const results = await pool.query('SELECT * FROM users');
    return results.rows;
};

module.exports = { getAllUsers };