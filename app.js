const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const patientRoute = require('./routes/patientRoute');

// DB connection
connectDB();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
 
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/v1/patient', patientRoute);

app.get(
  '/patient',
  (req, res, next) => {
    res.send('Hello');
  }
);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});