const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    item: String,
    price: Number,
    quantity: Number,
    date: { type: Date, default: Date.now },
    delivery_charge: Number
});

module.exports = mongoose.model("Order", OrderSchema);