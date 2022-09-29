const pool = require("../config/database");
const stadiums = require("../models/stadium.model");

const Stadiums = {};

Stadiums.getListStadiums = (req, res) => {
    res.render("pages/stadium/stadiums");
};

Stadiums.postStadiums = async (req, res) => {
    const { name, price, ability, location} = req.body;
    const newPage = {
        name,
        price,
        ability,
        location,
    };
    await pool.query("INSERT INTO stadiums set?", [newPage]);
    res.redirect("/stadiums/list-stadiums");
};

Stadiums.deleteStadium = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM stadiums WHERE ID = ?", [id]);
    res.redirect("/stadiums/list-stadiums");
};

module.exports=Stadiums