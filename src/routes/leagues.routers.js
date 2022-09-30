const express = require("express");
const router = express.Router();
const leaguesController = require('../controllers/leagues.controller');
const pool = require("../config/database");

router.get("/", leaguesController.getListLeagues);
router.post("/league",leaguesController.postLeagues);

//mostrar las listas
router.get('/list-leagues', async (req, res) =>{
    const teams = await pool.query('SELECT * FROM  leagues');
    res.render('pages/league/list-leagues', {leagues})
});

//eliminar jugador 
router.get('/delete-leagues/:id', leaguesController.deleteLeague);

//editar
router.get('/edit-leagues/:id', leaguesController.getleague);
router.post('/edit-leagues/:id', leaguesController.updateLeague);



module.exports = router;