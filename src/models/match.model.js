const matches = (sequelize, type) => {
    return sequelize.define('matches', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        team_name1: type.STRING,
        team_name2: type.STRING,
        type_championship: type.STRING,
        referee_name: type.STRING,
        start_time: type.STRING,
        end_time: type.STRING,
        place: type.STRING,
        date: type.STRING,


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

module.exports = matches