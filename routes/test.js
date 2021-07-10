const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hi, we are now at test route");
});

router.get("/1", (req, res) => {
    res.send("test 1");
});

module.exports = router;