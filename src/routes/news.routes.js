const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/list-matches', (req, res) => {
    res.render('pages/matches/list-matches');
});

router.get('/list-players-team-matches', (req, res) =>{
    res.render('pages/matches/list-players-team-matches')

});



module.exports = router;