'use strict'
const {
    Model                   //import Model Superclass from sequelize
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {        //start and export User Model
    
    class User extends Model {                      //Create User Class from Sequelize Model
        // static associate({ Post }){

        //     //user's posts                       //Associations to be added later
        //     User.hasMany(Post, { 
        //         as: 'author', 
        //         foreignKey: 'author_id'
        //     })
        // }
    }

    User.init({                                     //Set User Model's attributes
        userId: {                                   //User Id automatically generated and set as Primary Key
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,                //User's first name
        lastName: DataTypes.STRING,                 //User's last name
        email: DataTypes.STRING,                    //User's email
        passwordDigest: DataTypes.STRING            //Digest for User's password
    }, {
        sequelize,
        underscored: true,
        modelName: 'User'
    })
    return User
}