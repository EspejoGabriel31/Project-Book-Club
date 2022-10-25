const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db

router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    }
    else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.user_id })
        res.json({ user: user, token: result.value })
    }
})

router.get('/profile', async (req, res) => {
    res.json(req.currentUser)
})

module.exports = router