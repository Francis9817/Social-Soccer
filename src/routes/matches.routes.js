const express = require('express');
const router = express.Router();

const matchesController = require('../controllers/matches.controller');



const pool = require('../config/database');


router.get('/list-matches', matchesController.getListMatches);
router.get('/list-matches', matchesController.getListPlayersTeamMatches);






module.exports = router;