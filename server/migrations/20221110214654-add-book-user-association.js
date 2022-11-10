'use strict';
const { DataTypes } = require('sequelize')
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('books', 'user_id', {
            type: Sequelize.INTEGER,
            defaultValue: 0
        })
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.removeColumn('books', 'user_id')
    }
};
