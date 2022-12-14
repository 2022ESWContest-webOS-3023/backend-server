// middleware


var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var main = require('./main');
var email = require('./email');

router.get("/", function(req, res){
	res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.use('/main', main);
router.use('/email', email); // add router(/email) to express

module.exports = router;