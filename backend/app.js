const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Base API route
app.get('/api', (req, res) => {
  res.send('API is working');
});

// Routes
app.use('/api', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is working');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
