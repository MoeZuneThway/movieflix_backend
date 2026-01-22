const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const TrendingMovies = require('./models/TrendingMovies');
const app = express();
const PORT = 5001;
connectDB();
app.use(cors());
app.use(express.json());
app.use('/movies',movieRoutes);



app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
