'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('books', [
      {
        genre: 'High Fantasy, Magical Realism',
        book_name: '100 Years of Solitude',
        book_author: 'Gabriel García Márquez',
        picture: '../client/src/pictures/100YearsOfSolitude1.jpg'
      },
      {
        genre: 'Dark Fantasy, Comedy Horror',
        book_name: 'Chainsaw Man',
        book_author: 'Fujimoto Tatsuki',
        picture: '../client/src/pictures/ChainsawMan1.jpeg'
      },
      {
        genre: 'Comedy',
        book_name: 'MarriageToxin',
        book_author: 'Yoda Mizuki',
        picture: '../client/src/pictures/MarriageToxin1'
      },
      {
        genre: 'Literary Fiction',
        book_name: 'East of Eden',
        book_author: 'John Steinbeck',
        picture: '../client/src/pictures/EastOfEden1.jpg'
      },
      {
        genre: 'Comedy, Spy Fiction',
        book_name: 'Spy × Family',
        book_author: 'Tatsuya Endo',
        picture: '../client/src/pictures/SpyFamily2.jpeg'
      },
      {
        genre: 'Fantasy, Coming-of-age, Adventure',
        book_name: 'Mother of Learning',
        book_author: 'Domagoj Kurmaic',
        picture: '../client/src/pictures/Mother of Learning.jpg'
      },
      {
        genre: '',
        book_name: '',
        book_author: '',
        picture: ''
      },
      {
        genre: '',
        book_name: '',
        book_author: '',
        picture: ''
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
