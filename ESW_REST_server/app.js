const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./router/index')

const sequelize = require('./models').sequelize;



app.listen(3000, () => {
    console.log('start! express server on 3000');
});

sequelize.sync({force : false})
    .then(() => {
        console.log("Database connection success")
    })
    .catch(err => {
        console.log(err)
    })


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true
}));

app.use('/api', index)