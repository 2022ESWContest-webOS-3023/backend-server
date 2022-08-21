var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var index = require('./router/index')
app.listen(3000, () => {
	console.log("start! express server on port 3000");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.set('view engine', 'ejs'); // view engine을 ejs로 사용하겠다고 express에 알림

app.use("/", index);