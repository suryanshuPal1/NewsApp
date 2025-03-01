const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from your React app's origin
app.use(cors({
  origin: 'http://localhost:5173',
}));

// Define your routes...
