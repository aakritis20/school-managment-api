const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file for local development

// Create MySQL connection using environment variables
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST || 'localhost',         // Use DATABASE_HOST for production (Railway will set this)
    user: process.env.DATABASE_USER || 'root',              // Use DATABASE_USER for production
    password: process.env.DATABASE_PASSWORD || 'Happy_123', // Use DATABASE_PASSWORD for production
    database: process.env.DATABASE_NAME || 'school_management', // Use DATABASE_NAME for production
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.message);
        process.exit(1); // Exit the process if the connection fails
    } else {
        console.log('Database connected.');
    }
});

module.exports = db;
