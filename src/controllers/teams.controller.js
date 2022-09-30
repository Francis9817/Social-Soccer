const pool = require("../config/database");
const teams = require("../models/team.model");

const Teams = {};

Teams.getListTeams = (req, res) => {
    res.render("pages/team/teams");
};

Teams.postTeams = async (req, res) => {
    const { squad, boss, category, foundation } = req.body;
    const newLink = {
        squad,
        boss,
        category,
        foundation,
    };
    await pool.query("INSERT INTO teams set ?", [newLink]);
    //Flash
    req.flash('success', 'Agregado Correctamenta');
    res.redirect("/teams/list-teams");
};

Teams.deleteTeam = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM teams WHERE ID = ?", [id]);
    req.flash('success', 'Eliminado correctamente');
    res.redirect("/teams/list-teams");
};

Teams.getteam = async (req, res) => {
    const { id } = req.params;
    const team = await pool.query('SELECT * FROM teams WHERE id = ?', [id]);
    res.render('pages/team/edit-teams', { team: team[0]});

};
Teams.updateTeam = async (req, res) => {
    const { id } = req.params;
    const { squad, boss, category, foundation } = req.body;
    const newLink = {
        squad, boss, category, foundation
    };
    await pool.query('UPDATE teams set ? WHERE id = ?', [newLink, id]);
    res.redirect('/teams/list-teams');
};

module.exports = Teams;