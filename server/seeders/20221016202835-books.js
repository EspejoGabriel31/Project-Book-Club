'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('books', [
      {
        genre: 'High Fantasy, Magical Realism',
        book_name: '100 Years of Solitude',
        book_author: 'Gabriel García Márquez',
        picture: 'https://external-preview.redd.it/69v00DipLJrdUououm4uNKww8ViIPxTgA9sL0uKa690.jpg?auto=webp&s=e8acda487fc63782eb0e0df6fd6adfce95c90b86'
      },
      {
        genre: 'Dark Fantasy, Comedy Horror',
        book_name: 'Chainsaw Man',
        book_author: 'Fujimoto Tatsuki',
        picture: 'https://serimanga.com/uploads/2022/08/25/ZZhrDhxLFEwmfUm.jpg'
      },
      {
        genre: 'Comedy',
        book_name: 'MarriageToxin',
        book_author: 'Yoda Mizuki',
        picture: 'https://static.wikia.nocookie.net/weeky-shonen-jump/images/a/ac/MARRIAGETOXIN_SJ%2B_Volume_1.png/revision/latest?cb=20220729213417'

      },
      {
        genre: 'Literary Fiction',
        book_name: 'East of Eden',
        book_author: 'John Steinbeck',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/East_of_Eden_%281952_1st_ed_dust_jacket%29.jpg'
      },
      {
        genre: 'Comedy, Spy Fiction',
        book_name: 'Spy × Family',
        book_author: 'Tatsuya Endo',
        picture: 'https://static.wikia.nocookie.net/spy-x-family9171/images/0/0e/Volume_1.png/revision/latest?cb=20200508212135'
      },
      {
        genre: 'Fantasy, Coming-of-age, Adventure',
        book_name: 'Mother of Learning',
        book_author: 'Domagoj Kurmaic',
        picture: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653701704i/60236906.jpg'
      },
      {
        genre: 'Literary Fiction, Historical Fiction',
        book_name: 'The People Of Ostrich Mountain',
        book_author: 'Ndirangu Githaiga',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/41IRLcnZ3DL.jpg'
      },
      {
        genre: 'Literary Fiction, Historical Fiction',
        book_name: 'Things Fall Apart',
        book_author: 'Chinua Achebe',
        picture: 'https://africanliteraturereviews.files.wordpress.com/2022/07/image.png'
      },
      {
        genre: 'Fiction, Historical Fiction, Romance, Family Saga',
        book_name: 'The Thorn Birds',
        book_author: 'Colleen McCullough',
        picture: 'https://pictures.abebooks.com/inventory/14991783989.jpg'
      },
      {
        genre: 'Autobiography, Memoir',
        book_name: 'Unbowed',
        book_author: 'Wangari Maathai',
        picture: 'https://kbimages1-a.akamaihd.net/fab09fed-4e4e-46f2-95cc-0a2803ac146f/1200/1200/False/unbowed.jpg'
      },
      {
        genre: 'Philosophical Literature, Quest',
        book_name: 'Uncle Toms Cabin',
        book_author: 'Harriet Beecher Stowe',
        picture: 'https://ecsmedia.pl/c/uncle-tom-s-cabin-b-iext54781912.jpg'
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
