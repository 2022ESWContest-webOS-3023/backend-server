const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.listen(3000, () => {
    console.log('start! express server on 3000');
});


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

