// db.js
const sqlite3 = require('sqlite3').verbose();

// Open database
const db = new sqlite3.Database('./tasks.db');

// Create tasks table if not exists
db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT 0
)`);

module.exports = db;
