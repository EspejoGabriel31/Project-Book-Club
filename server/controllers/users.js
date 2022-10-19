
const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

// router.post('/', async (req, res) => {
//     const user = await User.create(req.body)
//     res.json(user)
// })

// router.get('/', async (req, res) => {
//     const users = await User.findAll()
//     res.json(users)
// })
router.post('/', async (req, res) => {
    let {password, ...rest} = req.body
    console.log('from client: ',req.body)
    const user = await User.create({
        ...rest,
        // role: 'poster',
        password_digest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router