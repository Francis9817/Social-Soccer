const pool = require("../config/database");

const Matches={}

Matches.getListMatches = (req, res) => {
    res.render('pages/matches/list-matches');
};

module.exports=Matches
