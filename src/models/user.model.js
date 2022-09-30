// const users =(sequelize, type) =>{
//     return sequelize.define('users', {
//         id: {
//             type: type.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         username: type.STRING(99),
//         password: type.STRING,
//         fullname: type.STRING(99),
       
//         createUsers:{
//             type: 'TIMESTAMP',
//             defaultValue: type.literal('CURRENT_TIMESTAMP'),
//             allowNull: false
//         },
//         updateUsers:{
//             type: 'TIMESTAMP',
//             defaultValue: type.literal('CURRENT_TIMESTAMP '),
//             allowNull: false
//         }
//     },{
//         timestamps: false,
//     })
// }

// module.exports = users