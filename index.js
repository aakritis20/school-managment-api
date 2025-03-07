const express = require("express");
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // The server is running on port 5000

// Set up the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Update with your MySQL username
  password: '', // Update with your MySQL password
  database: 'school_management',
});

app.use(bodyParser.json()); // To parse JSON bodies

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database.');
  }
});

// Add School API
app.post('/addSchool', (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validate input fields
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).send('All fields are required.');
  }

  // Insert data into the database
  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).send('Error inserting school into the database.');
    }
    res.status(201).send('School added successfully.');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
