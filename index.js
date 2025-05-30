// index.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import DB config

// Load environment variables
dotenv.config();

// App setup
const app = express();
app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.PRODUCTION_URL],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use((req, res, next) => {
    const allowedOrigins = [process.env.FRONTEND_URL, process.env.PRODUCTION_URL];
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Routes
const ContactForm = require('./route/contactFormRoute');
const UserRoute=require('./route/userRoute');
app.use('/api/v1/auth',UserRoute);
app.use('/api/v1/contact-form', ContactForm);

// Sample route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Function to start server after DB connection
const startServer = async () => {
  try {
    await connectDB(); // Wait for DB to connect
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB. Server not started.');
  }
};

startServer(); // Initialize
