require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

//EXPRESS SETTINGS
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/users', require('./controllers/users'))

app.get('/api', (req, res) => {
    res.json({ message: 'All Systems Online'})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
}) 



