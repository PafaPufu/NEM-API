const express = require('express');
const router = express.Router();

const Order = require("../models/Order");


//GET function to retrieve all the data from database
// router.get("/", (req, res)=>{
//     Order.find()
//         .exec()
//         .then(result => {
//             res.status(200).json(result);
//         })
//         .catch(err => {
//             res.status(500).json({ message: err });
//         })
// });

router.get("/", async (req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

//GET function with ID parameter to retrieve specific item from db
// router.get("/:orderId", (req, res) => {
//     const id = req.params.orderId;
//     Order.findById(id)
//     .exec()
//     .then(result =>{
//         if(result){
//             res.status(200).json(result);
//         } else {
//             res.status(404).json({ message: "No valid entry found" });
//         }
//     })
//     .catch(err => {
//         res.status(500).json({ message: err });
//     });
// });

router.get("/:orderId", async (req, res) => {
    try{
        const id = req.params.orderId;
        const order = await Order.findById(id);
        if (order){
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "No valid entry found" });
        }
    } catch (err) {
        res.status(500).json({ message: err });
    }
    
});

//POST function to create new data
// router.post("/", (req, res) => {
//     const myOrder = new Order({
//         item: req.body.item,
//         price: req.body.price,
//         quantity: req.body.quantity,
//         delivery_charge: req.body.delivery_charge
//     });

//     myOrder
//     .save()
//     .then(result => {
//         res.status(201).json({
//             message: "Handling POST request to /api/order - success",
//             createdOrder: result
//         });
//     })
//     .catch(err => {
//         res.status(500).json({ message: err });
//     });
// });

router.post("/", async (req, res) => {
    const myOrder = new Order({
        item: req.body.item,
        price: req.body.price,
        quantity: req.body.quantity,
        delivery_charge: req.body.delivery_charge
    });

    try{
        const savedOrder = await myOrder.save();
        res.status(201).json({
            message: "Handling POST request to /api/order - success",
            createdOrder: savedOrder
        });
    } catch (err) {
        res.status(500).json({ message: err });
    } 
});


//UPDATE as for now only for Item Name, quantity, and delivery charge. --DATE SHOULD BE INCLUDED LATER
router.patch("/:orderId", async (req, res) => {
    try{
        const id = req.params.orderId;
        const updatedOrder = await Order.updateOne(
            { _id: id },
            {
                $set: 
                { 
                    item: req.body.item,
                    quantity: req.body.quantity,
                    delivery_charge: req.body.delivery_charge
                }
            }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

//DELETE function
router.delete("/:orderId", async (req, res) =>{
    try{
        const id = req.params.orderId;
        const removeOrder = await Order.deleteOne({ _id: id });
        res.status(200).json(removeOrder);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});



module.exports = router;