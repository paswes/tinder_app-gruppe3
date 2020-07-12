const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.get('/', function(req, res, next) {
    db.query('SELECT users_pk, username, score FROM users', (err, result) => {
        if (err) {
            next(err);
        }

        const opponents = result.rows;
        const randomOpponent = opponents[Math.floor(Math.random() * opponents.length)];
        const randomOpponentStripped = JSON.stringify(randomOpponent.username).replace(/['"]+/g, '');

        res.render('chooseOpponent', { username: randomOpponentStripped, score: randomOpponent.score });

        //const thumbsUpBtn = document.getElementById('thumbs-up_btn');
        //thumbsUpBtn.onclick =
    })
});

module.exports = router;
