'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate({User, Book}){
      // book
      Post.belongsTo(Book, {as: 'book',foreignKey: 'book_id'})
      //user
      Post.belongsTo(User, {as: 'user',foreignKey: 'user_id'})
  }

  }
  Post.init({
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,               //Add
      autoIncrement: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: false
  });
  return Post;
};