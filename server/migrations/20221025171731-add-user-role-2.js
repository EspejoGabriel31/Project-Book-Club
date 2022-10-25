'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'clearance',{
        type: Sequelize.DataTypes.ENUM,
        values:[
            'reader',
            'admin'
        ],
        defaultValue: 'reader'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users','clearance')
  }
};
