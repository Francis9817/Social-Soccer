const pool = require("../config/database");
const matches = require("../models/match.model");

const Matches = {}

Matches.getAddMatch = (req, res) => {
    res.render('pages/match/matches');
};

Matches.getUpdateMatch = async (req,res) => {
    const { id } = req.params;
    const matches = await pool.query('SELECT *FROM matches WHERE id = ?', [id]);
    res.render('pages/match/edit-matches', { match: matches[0] })
}

Matches.postMatch = async (req, res) => {
    const {
        team_name1, 
        team_name2, 
        type_championship, 
        referee_name, 
        start_time, 
        end_time,
        place, 
        date
    } = req.body;
    const newMatch = {
        team_name1,
        team_name2,
        type_championship,
        referee_name,
        start_time,
        end_time,
        place,
        date,
    };
    await pool.query("INSERT INTO matches set ?", [newMatch]);
    res.redirect("/matches/list-matches");
};

Matches.deleteMatch = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM matches WHERE ID = ?", [id]);
    res.redirect("/matches/list-matches");
};

Matches.getListMatches= async (req, res) => {
    const matches = await pool.query('SELECT * FROM matches ');
    res.render('pages/match/list-matches', { matches });
};
Matches.updateMatch = async (req, res) => {
    const { id } = req.params;
    const { 
        team_name1,
        team_name2, 
        type_championship, 
        referee_name,
        start_time,
        end_time,
        place, 
        date 
    } = req.body;
    const newMatch = {
        team_name1, 
        team_name2, 
        type_championship, 
        referee_name,
        start_time , 
        end_time,
        place, 
        date
    };
    await pool.query("UPDATE matches set ? WHERE id = ?", [newMatch, id]);
    res.redirect('/matches/list-matches');
};

module.exports = Matches
