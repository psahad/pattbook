const path = require("path")
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000;

connectDB();

const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://patt-book.netlify.app'];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions));

app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/activity", require("./routes/activityRoutes"))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));