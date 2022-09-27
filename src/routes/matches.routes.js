const express = require('express');
const router = express.Router();

const getListMatches = require('../controllers/matches.controller').getListMatches;


const pool = require('../config/database');


router.get('/list-matches', getListMatches);


router.get('/list-players-team-matches', (req, res) =>{
    res.render('pages/matches/list-players-team-matches')

});



module.exports = router;