const express = require('express');
const cors = require('cors');
require('dotenv').config();

const movieRoutes = require('./routes/movieRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);
app.use('/api/favorites', favoriteRoutes);

// Health Check
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Movie Explorer API' });
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('ERROR 💥:', err);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Something went wrong!',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
