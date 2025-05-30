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
app.use(cors());

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
