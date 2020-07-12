const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('game', { headline: 'Game', message: 'the game will be implemented here' });
});

module.exports = router;
