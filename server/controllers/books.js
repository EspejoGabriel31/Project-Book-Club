const router = require('express').Router()
const db = require('../models')

const {Book, Post} = db


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

router .get('/:bookId', async(req, res) => {
    let bookId = Number(req.params.bookId)
    if (isNaN(bookId)){
        res.status(404).json({message: `Invalid id "${bookId}"`})
    }
    else{
        const book = await Book.findOne({
            where: { bookId: bookId},
            include: {
                association: 'posts',
                include: 'user'
            }
        })
    }
})
