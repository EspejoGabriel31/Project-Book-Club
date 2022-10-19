require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
// const cookieSession = require('cookie-session')

const PORT = process.env.PORT || 7000
const app = express()

//EXPRESS SETTINGS

// app.use(cookieSession({
//     name: 'session',
//     keys: [process.env.SESSION_SECRET],
//     maxAge: 24 * 60 * 60 * 1000 //24 hours
// }))
app.use(cors()
//     {
//     origin: 'http://localhost:3000',
//     credentials: true
// })
)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

app.get('/api', (req, res) => {
    res.json({ message: 'All Systems Online'})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
}) 



