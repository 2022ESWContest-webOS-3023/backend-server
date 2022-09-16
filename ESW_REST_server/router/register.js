const express = require('express');
const app = express();
const router = express.Router();
const {User} = require('../models');

router.post("/kakao", (req, res, next) => {
    console.log(req.body);
    User.create(req.body)
    .then((users) => {
        res.json(req.body);
    })
    .catch((err) => {
        console.error(err);
        next(err);
        res.json(req.body);
    });
});

module.exports = router;

