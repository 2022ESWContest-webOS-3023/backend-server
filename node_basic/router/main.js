var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", (req, res) => {
    console.log("main.js is loaded...")
	res.sendFile(path.join(__dirname, '../public/main.html'));
});


module.exports = router;