module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING
        }
    })
    return User
}



// const { Sequelize, DataTypes } = require('sequelize');

// const DefineUser = (sequelize) => {
//     return sequelize.define("User", {
//         username: {
//             type: DataTypes.STRING
//         }
//     })    
// }

// module.exports = {
//     DefineUser
// }