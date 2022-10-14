'use strict'
const { 
    Model                                           //import Model Superclass from sequelize
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {        //start Book Model
    //posts on books
    class Book extends Model {                      //Book inheirits Model's base traits 
        static associate({ Post }){                     //Book is associated with the Post Model...
            Book.hasMany(Post, {foreignKey: 'book_id', as: 'posts'})        //...in a One-to-Many relationship
        }
    }

    Book.init({                                     //Setting Book Model's attributes
        bookId: {                                   //Book Id automatically generates and is set to the primary key
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,                    //Title of Book
        author: DataTypes.STRING,                   //Author of Book
        pic: DataTypes.STRING,                      //Picture of Book
        published: DataTypes.INTEGER,                //Published Date of Book
        //Add More Attributes
    }, {
        sequelize,                                  //misc Sequelize stuff
        underscored: true,
        modelName: 'Book',
    })
    return Book                                     //Return Book
}