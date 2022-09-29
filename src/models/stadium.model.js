const stadiums = (sequelize, type) => {
    return sequelize.define('stadiums', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: type.STRING,
        price: type.STRING,
        ability: type.STRING,
        location: type.STRING,

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

module.exports = stadiums