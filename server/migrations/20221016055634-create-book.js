'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', { //table name to lowercase
      book_id: {                    //change to Model's id and delete the other id attribute
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.TEXT,     //Add allowNull: false to everything that has allowNulls in the Model
        allowNull: false
      },
      book_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      book_author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');    //change model name to all lowercase
  }
};