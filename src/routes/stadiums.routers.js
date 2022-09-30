const express = require('express');
const router = express.Router();
const stadiumsController = require('../controllers/stadiums.controller');
const pool = require('../config/database');

router.get('/', stadiumsController.getListStadiums);
router.post('/stadium', stadiumsController.postStadiums);
//mostrar las listas
router.get('/list-stadiums', async (req, res) =>{
    const stadiums = await pool.query('SELECT * FROM  stadiums');  
    res.render('pages/stadium/list-stadiums', {stadiums})
  })
//eliminar estadio
router.get('/delete-stadiums/:id', stadiumsController.deleteStadium);

//editar
router.get('/edit-stadiums/:id', stadiumsController.getStadium);
router.post('/edit-stadiums/:id', stadiumsController.updateStadium);

module.exports = router;