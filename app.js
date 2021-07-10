const express = require("express");
const app = express();
const mongoose = require('mongoose');
const routeTest = require('./routes/test');
const routeOrder = require('./routes/orders');
const cors = require("cors");
require('dotenv/config');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/test", routeTest);
app.use("/api/order", routeOrder);


app.get("/", (req, res) => {
    res.send("Welcome to express tutorial");
});

mongoose.connect(
    process.env.DB_CONNECTION, 
{ useNewUrlParser: true, useUnifiedTopology: true }, 
() =>
    console.log("connected to database!")
);
//can be any other port or port 5000
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, ()=> console.log(`Listening on port ${PORT}`));