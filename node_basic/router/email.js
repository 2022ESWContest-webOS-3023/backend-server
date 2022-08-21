var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '1234',
	database: 'my_db'
});

connection.connect();


router.post("/post", (req, res) => {
	res.render('email.ejs', { // render는 기본적으로 views 디렉토리부터 path가 시작됨.
		'email': req.body.email
	})
});

router.post('/ajax', (req, res) => {
	var responseData = {};
	var email = req.body.email;

	var queary = connection.query('select * from member where email = "' + email + '"', (err, rows) => {
		if(err) throw err;
		console.log(rows)
		if(rows[0]){
			responseData.result = 'ok';
			responseData.email = email;
		}
		else {
			responseData.result = "none";
			responseData.email = "";
		}
		res.json(responseData)
	});
});


module.exports = router;