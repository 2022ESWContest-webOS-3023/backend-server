const express = require('express');
const app = express();
const router = express.Router();
const {User} = require('../models');

router.post("/kakao", (req, res) => {
    console.log(req.body);
    User.create(req.body);
    res.json(req.body);
})

module.exports = router;