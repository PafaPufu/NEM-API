const express = require('express');
const router = express.Router();

const Order = require("../models/Order");

router.get("/", (req, res)=>{
    res.send("Orders route");
});

router.post("/", (req, res) => {
    const myOrder = new Order({
        item: req.body.item,
        price: req.body.price,
        quantity: req.body.quantity,
        delivery_charge: req.body.delivery_charge
    });

    myOrder
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err)
    });
});

module.exports = router;