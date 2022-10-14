'use strict'
const { 
    Model 
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    //posts on books
    class Book extends Model {
        static associate({ Post }){
            Book.hasMany(Post, {foreignKey: 'book_id', as: 'posts'})
        }
    }

    Book.init({
        bookId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pic: DataTypes.STRING,
        published: DataTypes.INTEGER
    }, {
        sequelize,
        underscored: true,
        modelName: 'Book',
    })
    return Book
}