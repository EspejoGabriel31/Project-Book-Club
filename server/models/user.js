'use strict'
const {
    Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ Post }){

            //user's posts
            User.hasMany(Post, { 
                as: 'author', 
                foreignKey: 'author_id'
            })
        }
    }
    User.init({
        userId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        underscored: true,
        modelName: 'User'
    })
    return User
}