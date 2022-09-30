const postgames = (sequelize, type) => {
    return sequelize.define('postgames', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        top_player: type.STRING,
        best_goal: type.STRING,
        yellow_card: type.STRING,
        red_card: type.STRING,
        
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

module.exports = postgames