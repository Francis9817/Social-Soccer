const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matches.controller');
const pool = require('../config/database');


router.get('/', matchesController.getAddMatch);
router.post('/match', matchesController.postMatch);

//mostrar las listas
router.get('/list-matches', matchesController.getListMatches);

//eliminar partidos
router.get('/delete-matches/:id', matchesController.deleteMatch);

//editar
router.get('/edit-matches/:id', matchesController.getUpdateMatch);
router.post('/edit-matches/:id', matchesController.updateMatch);


module.exports = router;

