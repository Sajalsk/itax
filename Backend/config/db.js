const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1', // Change to your MySQL host
  user: 'root', // Change to your MySQL user
  password: 'Sajal@123', // Change to your MySQL password
  database: 'myapi', // Change to your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.message);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
