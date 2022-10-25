'use strict';
const bcrypt = require('bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
        first_name: 'System',
        last_name: 'Admin',
        email: 'admin@eastofreading.com',
        clearance: 'admin',
        password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {
        email: 'admin@eastofreading.com'
    })
  }
};
