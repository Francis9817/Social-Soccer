const pool = require("../config/database");

const Matches={}

Matches.getListMatches = (req, res) => {
    res.render('pages/matches/list-matches');
};

 Matches.getListPlayersTeamMatches = (req, res) =>{
    res.render('pages/matches/list-players-team-matches')

};
module.exports=Matches
