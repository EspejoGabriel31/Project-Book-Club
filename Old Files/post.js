'use strict'
const { 
    Model 
} = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
    class Post extends Model{
        static associate({User, Book}){
            // book
            Post.belongsTo(Book, {
                as: 'book', 
                foreignKey: 'book_id'
            })
            
            //user
            Post.belongsTo(User, { 
                as: 'author', 
                foreignKey: 'author_id'
            })
        }
    }
    Post.init({
        postId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        bookId: DataTypes.SMALLINT,
        authorId: DataTypes.SMALLINT,
        content: DataTypes.STRING
    }, {
        sequelize,
        underscored: true,
        modelName: 'Post'
    })
    return Post
}