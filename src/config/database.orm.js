const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "social_soccer_public";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database created or verified successfully");
    })
})

// const usersModel = require('../models/user.model');
const stadiumsModel = require('../models/stadium.model');
const profilesModel = require('../models/profile.model');
const teamsModel = require('../models/team.model');
const leaguesModel = require('../models/league.model');
const matchesModel = require('../models/match.model');
const postgamesModel = require('../models/postgame.model');
const publicationsModel = require('../models/publication.model');
const refereesModel = require('../models/referee.model');



const sequelize = new Sequelize(
  'social_soccer_public',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Connect')
  })
  .catch(err => {
    console.log('No connect')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("synchronized tables")
  })


const stadiums = stadiumsModel(sequelize, Sequelize);
const profiles = profilesModel(sequelize, Sequelize);
const teams= teamsModel(sequelize, Sequelize);
const leagues = leaguesModel(sequelize, Sequelize);
const matches = matchesModel(sequelize, Sequelize);
const postgames = postgamesModel(sequelize, Sequelize);
const publications = publicationsModel(sequelize, Sequelize);
const referees = refereesModel(sequelize, Sequelize);



//Relaciones 
teams.hasMany(stadiums)
stadiums.belongsTo(teams)

teams.hasMany(leagues)
leagues.belongsTo(teams)

teams.hasMany(postgames)
postgames.belongsTo(teams)

teams.hasMany(matches)
matches.belongsTo(teams)

matches.hasMany(referees)
referees.belongsTo(matches)

publications.hasMany(matches)
matches.belongsTo(publications)

publications.hasMany(profiles)
profiles.belongsTo(publications)


module.exports = {
  stadiums,
  profiles,
  teams,
  leagues,
  matches,
  postgames,
  publications,
  referees
}