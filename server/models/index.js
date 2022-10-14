'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]
const db = {}

let sequelize
if (config.use_env_variable){
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else{
    sequelize = new Sequelize(config.database, config.username, config.password, config)
}

//Can comment out
try {
    sequelize.authenticate()
    console.log(`Connected with Sequelize at ${process.env.DB_DATABASE}`)
} catch (err){
    console.log(`Unable to connect to PG: ${err}`)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.' !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate){
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

// require('dotenv').config()

// module.exports = {
//     "development": {
//         "username": process.env.DB_USERNAME,
//         "password": process.env.DB_PASSWORD,
//         "database": process.env.DB_DATABASE,
//         "host": "127.0.0.1",
//         "dialect": "postgres"
//     },
//     "test": {
//         "username": "root",
//         "password": "null",
//         "database": "database_test",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
//     },
//     "production": {
//         "username": "root",
//         "password": "null",
//         "database": "database_production",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
//     }
// }