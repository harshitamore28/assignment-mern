const express = require('express');
const restaurants = require ("./data/restaurants");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");

const bodyParser = require("body-parser");
const cors = require("cors");
const postRoutes = require("./routes/posts");

const app=express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();
connectDB();

app.use(express.json()); // to accept json data



app.get('/getListOfPlaces',(req,res) => {
    res.json(restaurants);
})

app.use('/api/users',userRoutes)

app.use("/posts", postRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

module.exports = app.listen(PORT, console.log(`Server started on port ${PORT}`));