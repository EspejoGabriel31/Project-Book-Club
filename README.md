# Project-Book-Club: East of Reading

East of Reading is a rating book site that welcomes anyone who loves to read and share what they love about books.

## Technologies used
1. MySQL
2. ExpressJS
3. ReactJS
4. NodeJS

## Setup 
> You will need to have a database to connect to. Follow the instructions to set it up.
* Fork and clone the repo into your local machine
* Then navigate to the __server__ folder and run `npm i` to install the dependencies for the _backend_
* Still inside the __server__, create an `.env` file. This file will need to containing these environmental variables
```
PORT=7000
DB_USERNAME='YOUR_USER_NAME'
DB_PASSWORD='YOUR_PASSWORD'
DB_DATABASE=book_club

```
* Since the database run locally, you will also need to run `sequelize db:migrate`
* Next, navigate to the __client__ folder and run `npm i` to install the dependencies for the _frontend_
* Finally, run `npm start` inside the __client__ folder; and run `node server.js` inside the __server__ folder to get the app run.


### Frontend

The frontend of this application is made with ReactJS. 

### Backend

SQL database with NodeJS following with its Express framework

___
####Contributors
* [Grabriel](https://github.com/EspejoGabriel31)
* [Azuka](https://github.com/Knavish1)
* [Andrew]()
* [Phuong](https://github.com/YPhuong15)

