const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'switchyard.proxy.rlwy.net',
  user: 'root',
  password: 'bDneGEfGocjAjwadylRrdIWdEsjTqIWL',
  database: 'railway',
  port: 43374,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;