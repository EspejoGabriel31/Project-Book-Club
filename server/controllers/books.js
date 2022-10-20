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
    console.log("books")
    const books = await Book.findAll()
    res.json(books)
})

router .get('/:book_id', async(req, res) => {
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


module.exports = router