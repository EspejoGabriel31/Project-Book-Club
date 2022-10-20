const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db

router.post('/', async (req, res) => {
    console.log('worked!')
    let user = await User.findOne({
        where: {email: req.body.email}
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({message: `Could not find a user with the provided username and password`})
    }
    else{
        // req.session.user_id = user.user_id
        const result = await jwt.encode(process.env.JWT_SECRET, {id: user.user_id})
        res.json({user: user, token: result.value})
    }
})

router.get('/profile', async (req, res) => {
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod == 'Bearer'){
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            console.log("result: ", result.value)
            const { id } = result.value
            let user = await User.findOne({
                where: {
                    user_id: id
                }
            })
            res.json(user)
        }
    } catch {
        res.json(null)
    }
})

// router.get('/profile', async(req, res) => {
//     console.log(req.session.user_id)
//     try{
//         let user = await User.findOne({
//             where: {
//                 user_id: req.session.user_id
//             }
//         })
//         res.json(user)
//     } catch{
//         res.json(null)
//     }
// })

module.exports =router