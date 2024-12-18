const express = require('express');
const cors = require('cors');
const db = require('./models/db');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/users', userRoutes);

// Test Endpoint
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
