const leagues = (sequelize, type) => {
    return sequelize.define('leagues', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        boss: type.STRING,
        category: type.STRING,
        number_teams: type.STRING,
        city: type.STRING,
        
        createTeams: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTeams: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = leagues