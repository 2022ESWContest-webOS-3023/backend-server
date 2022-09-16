const express = require('express');
const app = express();
const router = express.Router();
const register = require('./register');
const board = require('./board')

router.use('/register', register)
router.use('/board', board)
module.exports = router;