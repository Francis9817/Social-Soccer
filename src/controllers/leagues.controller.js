const pool = require("../config/database");
const leagues = require("../models/league.model");

const Leagues = {};

Leagues.getListLeagues =(req, res) => {
    res.render("pages/league/leagues");
};

Leagues.postLeagues = async (req, res) => {
    const { boss, category, number_teams, city }= req.body;
    const newLink = {
        boss,
        category,
        number_teams,
        city,
    };
    await pool.query("INSERT INTO leagues set ?", [newLink]);
    req.flash('success', 'Agregado Correctamenta');
    res.redirect("/leagues/list-leagues");
};

Leagues.deleteLeague = async (req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM leagues WHERE ID = ?",[id]);
    req.flash('success', 'Eliminado correctamente');
    res.redirect("/leagues/list-leagues");
};

Leagues.getleague = async (req, res) => {
    const{ id } = req.params;
    const league = await pool.query('SELECT * FORM leagues WHERE id =?', [id]);
    res.render('pages/league/edit-leagues',{league: league[0]});

};

Leagues.updateLeague = async (req, res) => {
    const { id } = req.params;
    const {boss, category, number_teams,city} = req.body;
    const newLink = {
        boss, category, number_teams, city
    };
    await pool.query('UPDATE leagues set ? WHERE id = ?', [newLink,id]);
    res.redirect('/leagues/list-leagues');
};

module.exports = Leagues;

