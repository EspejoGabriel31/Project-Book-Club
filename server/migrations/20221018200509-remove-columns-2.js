'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'createdAt')
    await queryInterface.removeColumn('books', 'updatedAt')
    await queryInterface.removeColumn('posts', 'createdAt')
    await queryInterface.removeColumn('posts', 'updatedAt')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
