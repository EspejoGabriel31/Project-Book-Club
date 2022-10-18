'use strict';
const {DataTypes} = require('sequelize')


module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('books', 'thumbnail', {
        type: DataTypes.STRING
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'thumbnail')
  }
};
