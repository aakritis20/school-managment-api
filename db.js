const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Happy_123', // Use your password here
    database: 'school_management',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
    console.log('Database connected.');
});

module.exports = db;
