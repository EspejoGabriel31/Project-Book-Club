'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Book}){
      // book
      Post.belongsTo(Book, {
      as: 'book', 
      foreignKey: 'book_id'
      })

      //user
      Post.belongsTo(User, { 
      as: 'user', 
      foreignKey: 'user_id'
      })
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