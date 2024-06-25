// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const { Task } = require('./models'); 
const PORT = process.env.PORT || 5000;
// server.js
const tasksRouter = require('./routes/tasks');

// Use tasks routes
app.use('/api', tasksRouter);
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
  allowedHeaders: 'Content-Type,Authorization', // Allow these headers
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.get('/api/tasks', async (req, res) => {
  try {
    // Fetch tasks from the database
    const tasks = await Task.findAll(); // Assuming you have a Task model with a findAll() method

    // Respond with the tasks data
    res.json(tasks);
  } catch (error) {
    // Handle errors
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const sqlite3 = require('sqlite3').verbose();

// Create a new database connection
const db = new sqlite3.Database('path/to/your/database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Close the database connection when the Node.js process exits
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Closed the SQLite database connection.');
    }
    process.exit();
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
