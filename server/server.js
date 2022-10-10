require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/api', (req, res) => {
    res.json({ message: 'All Systems Online'})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
}) 