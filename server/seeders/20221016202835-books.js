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
        genre: 'Adventure, Fiction',
        book_name: 'Hero',
        book_author: 'Mike Lupica',
        picture: '../client/src/pictures/Hero3.jpg'
      },
      {
        genre: 'Literary Fiction, Historical Fiction',
        book_name: 'The People Of Ostrich Mountain',
        book_author: 'Ndirangu Githaiga',
        picture: '../client/src/pictures/PeopleOfOstrichMountain.jpg'
      },
      {
        genre: 'Literary Fiction, Historical Fiction',
        book_name: 'Things Fall Apart',
        book_author: 'Chinua Achebe',
        picture: '../client/src/pictures/ThingsFallApart.jpg'
      },
      {
        genre: 'Fiction, Historical Fiction, Romance, Family Saga',
        book_name: 'The Thorn Birds',
        book_author: 'Colleen McCullough',
        picture: '../client/src/pictures/ThornBirds.jpg'
      },
      {
        genre: 'Autobiography, Memoir',
        book_name: 'Unbowed',
        book_author: 'Wangari Maathai',
        picture: '../client/src/pictures/Unbowed.jpg'
      },
      {
        genre: 'Philosophical Literature, Quest',
        book_name: 'Uncle Toms Cabin',
        book_author: 'Harriet Beecher Stowe',
        picture: '../client/src/pictures/UncleTomCabin2.jpg'
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
