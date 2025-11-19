const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'tramway.proxy.rlwy.net',
  user: 'root',
  password: 'lVNwIOSUmQWwNmfURRuYTURbWNGKFKdp',
  database: 'railway',
  port: 32139,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;