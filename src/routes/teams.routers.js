const express = require("express");
const router = express.Router();
const teamsController = require('../controllers/teams.controller');
const pool = require("../config/database");

router.get("/", teamsController.getListTeams);
router.post("/team",teamsController.postTeams);

//mostrar las listas
router.get('/list-teams', async (req, res) =>{
    const teams = await pool.query('SELECT * FROM  teams');
    res.render('pages/team/list-teams', {teams})
});

//eliminar jugador 
router.get('/delete-teams/:id', teamsController.deleteTeam);

//editar
router.get('/edit-teams/:id', teamsController.getteam);
router.post('/edit-teams/:id', teamsController.updateTeam);



module.exports = router;