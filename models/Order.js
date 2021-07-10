const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    delivery_charge: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Order", OrderSchema);