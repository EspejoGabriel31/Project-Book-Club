# Project-Book-Club: East of Reading

Deployment Link: http://milestoneproject3-env.eba-psnnyws3.us-east-1.elasticbeanstalk.com/

# Project Description

East of Reading is a rating book site that welcomes anyone who loves to read and share what they love about books. 
The website is a Book Club with various books from all across the globe that Users visiting the site, can find then join in the discussions of each of those different genres of books.

Users are able to create an account and log into the account. From there, they can browse the collection of books and leave discussion posts on book threads

## Technologies 
1. MySQL
2. ExpressJS
3. ReactJS
4. NodeJS

## Setup 
> You will need to have a postgres database to connect to. Follow the instructions to set it up locally.
* Fork and clone the repo into your local machine
* Then navigate to the __server__ folder and run `npm i` to install the dependencies for the _backend_
* Still inside the __server__, create an `.env` file. This file will need to containing the following environmental variables
```
PORT=7000
DB_USERNAME='YOUR_USER_NAME'
DB_PASSWORD='YOUR_PASSWORD'
DB_DATABASE=book_club
JWT_SECRET=qiweuxhoiuehqmie
```
* Since the database run locally, you will also need to run `sequelize db:migrate`
* Next, navigate to the __client__ folder and run `npm i` to install the dependencies for the _frontend_
* Still inside the __client__folder, create an `.env` file and add it to the `.gitignore` file. This file will need to contain the  environmental variable
```
REACT_APP_SERVER_URL=http://localhost:7000
```
* Finally, run `npm start` inside the __client__ folder; and run `node server.js` inside the __server__ folder to get the app run.


### Frontend

The frontend of this application is made with ReactJS. 

### Backend

SQL database with NodeJS framework using Express .

NB:
Attributes (Andrew Wokabi) - Part of npx creation and base book_club de-coupled architecture adds and omits. Built and edited PostreSQL table with one to many relation optimized on cli. Added, deleted and edited config files, seeders, procfile and used the Sequelize ORM. 

### Unfinished functionality
* Search bar functionality
* __Genres__ dropdown in navigation bar with each element link to each genre
* `CRUD` operation (Updating) for post need to be added
* `Replying to post` needed to be implemented
* `CRUD` operations (Deleting, Updating) for book need to be added
* User authentication implementation for Book `CRUD` operations
* Functionality for Users to create Book entries
* Moderator/Admin role/previliges 
___

### Contributors

* [Azuka Ehi](https://github.com/Knavish1) - frontend - built `Hero`, `Find`, `Card` and `Navbar` components and styled components
* [Gabriel Espejo](https://github.com/EspejoGabriel31) - backend - built `User`, `Book`, and `Authentication` controllers, implemented `CurrentUser` system and App architecture
* [Phuong Tong](https://github.com/YPhuong15) - frontend - built `Registration`, `Login`, `Footer`, `PostContainer`, `NewPost`, `BookList`, `BookDetail`, and `NavBar` components and styled components
* [Andrew Wokabi](https://github.com/DrewKW) - backend - built `Books`, `Posts`, and `User` models and migrations, connected app to `Postgres SQL` database
