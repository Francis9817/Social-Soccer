const pool = require("../config/database");
const stadiums = require("../models/stadium.model");

const Stadiums = {};

Stadiums.getListStadiums = (req, res) => {
    res.render("pages/stadium/stadiums");
};

Stadiums.postStadiums = async (req, res) => {
    const { name, price, ability, location } = req.body;
    const newStadium = {
        name,
        price,
        ability,
        location,
    };
    await pool.query("INSERT INTO stadiums set?", [newStadium]);
    res.redirect("/stadiums/list-stadiums");
};

Stadiums.deleteStadium = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM stadiums WHERE ID = ?", [id]);
    res.redirect("/stadiums/list-stadiums");
};

Stadiums.getStadium = async (req, res) => {
    const { id } = req.params;
    const stadium = await pool.query('SELECT * FROM stadiums WHERE id = ?', [id]);
    res.render('pages/stadium/edit-stadiums', { stadium: stadium[0] });
};
Stadiums.updateStadium = async (req, res) => {
    const { id } = req.params;
    const { name, price, ability, location } = req.body;
    const newStadium = {
        name, price, ability, location
    };
    await pool.query("UPDATE stadiums set ? WHERE id = ?", [newStadium, id]);
    res.redirect('/stadiums/list-stadiums');
};



module.exports = Stadiums