const express = require("express");
const app = express();
const mongoose = require('mongoose');
const routeTest = require('./routes/test');
const routeOrder = require('./routes/orders');

// Middleware
app.use(express.urlencoded({ extended: true }));

app.use("/api/test", routeTest);
app.use("/api/order", routeOrder);


app.get("/", (req, res) => {
    res.send("Welcome to express tutorial");
});

mongoose.connect("mongodb+srv://mimicrab:crab123@crab-test-cluster.z8rtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true }, 
() =>
    console.log("connected to database!")
);
//can be any other port or port 5000
const PORT = process.env.PORT || 5000;
app.listen(5000, ()=> console.log(`Listening on port ${PORT}`));