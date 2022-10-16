'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
     static associate({ Post }){                     
      
      //Book is associated with the Post Model...
      Book.hasMany(Post, {foreignKey: 'book_id', as: 'posts'})        //...in a One-to-Many relationship
  }
  }

  /* 
    to expand model:
    -for each attribute, place everything after the attribute name in {}
    -add 'type:' for each DataTypes
    -add 'allowNull: false' to each attribute
  */

  Book.init({
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,               //Add
      autoIncrement: true             //Add
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books', //add table name as lowercase model name plural
    timestamps: false   //add timestamps: false
  });
  return Book;
};