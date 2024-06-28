const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
const showRoutes = require('./routes/showRoutes');
const bookingRoute = require('./routes/bookingRoute')
const cors = require('cors')

require('dotenv').config();


const dburl = "mongodb+srv://siddharth:FOrYp6GZmOTZWgh9@cluster0.bpjvihj.mongodb.net/scaler?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json());
app.use(cors());

mongoose.connect(dburl).then((function () {
  console.log("connected to db");
})).catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/theatres', theatreRoutes);
app.use('/api/shows', showRoutes);
app.use('/api/bookings', bookingRoute)

app.listen(8081, () => {
  console.log("server is connected");
}); 


const PORT = process.env.PORT || 8081

const path = require("path");

__dirname = path.resolve();

// render deployment
app.use(express.static('./public'))
