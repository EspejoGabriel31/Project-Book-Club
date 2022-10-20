const router = require('express').Router()
const db = require('../models')

const {Book, Post, User} = db


//CREATE Route Book
router.post('/', async (req, res) => {
    const book = await Book.create(req.body)
    res.json(book)
})

//GET ALL Route Book
router.get('/', async (req, res) => {
    const books = await Book.findAll()
    res.json(books)
})

//GET ONE Route Book
router.get('/:book_id', async(req, res) => {
    let book_id = Number(req.params.book_id)
    if (isNaN(book_id)){
        res.status(404).json({message: `Invalid id "${book_id}"`})
    }
    else{
        const book = await Book.findOne({
            where: { book_id: book_id},
            include: {
                association: 'posts',
                include: 'user'
            }
        })
        if(!book){
            res.status(404).json({message: `Could not find place with id "${book_id}`})
        }
        else{
            res.json(book)
        }
    }
})

//CREATE Route Posts
router.post('/:book_id/posts', async (req, res) =>{
    const book_id = Number(req.params.book_id)
    console.log(req.body)
    // req.body.comment =req.body.comment ? true : false

    const book = await Book.findOne({
        where: { book_id: book_id}
    })

    if (!book) {
        res.status(404).json({message: `Could not find book with id "${book_id}`})
    }
    
    const user = await User.findOne({
        where: {user_id: req.body.user_id}
    })

    if(!user){
        res.status(404).json({message: `Could not find user with id "${user_id}`})
    }

    const post = await Post.create({
        ...req.body,
        book_id: book_id
    })
    res.send({
        ...post.toJSON(),
        user
    })

})

router.delete('/:book_id/posts/:post_id', async (req,res) =>{
    let book_id = Number(req.params.book_id)
    let post_id = Number(req.params.post_id)

    if (isNaN(book_id)){
        res.status(404).json({message: `Invalid id "${book_id}"`})
    }
    else if (isNaN(post_id)){
        res.status(404).json({message: `Invalid id "${post_id}"`})
    }
    else{
        const post = await Post.findOne({
            where: { post_id: post_id, book_id: book_id}
        })
        if(!post){
            res.status(404).json({ message: `Could not find post with id "${post_id}" for book with id ${book_id}`})
        }
        else{
            await post.destroy()
            res.json(post)
        }
    }
})

module.exports = router