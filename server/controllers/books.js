const router = require('express').Router()
const jwt = require('json-web-token')
const db = require('../models')

const { Book, Post, User } = db


//CREATE Route Book
router.post('/', async (req, res) => {
    if (req.currentUser?.clearance !== 'admin') {
        return res.status(403).json({ message: 'You are not allowed to do this' })
    }
    const book = await Book.create(req.body)
    res.json(book)
})

//READ ALL Route Book
router.get('/', async (req, res) => {
    const books = await Book.findAll()
    res.json(books)
})

//READ ONE Route Book
router.get('/:book_id', async (req, res) => {
    console.log("currentUser GET: ", req.currentUser)
    let book_id = Number(req.params.book_id)
    if (isNaN(book_id)) {
        res.status(404).json({ message: `Invalid id "${book_id}"` })
    }
    else {
        const book = await Book.findOne({
            where: { book_id: book_id },
            include: {
                association: 'posts',
                include: 'user'
            }
        })
        if (!book) {
            res.status(404).json({ message: `Could not find place with id "${book_id}` })
        }
        else {
            res.json(book)
        }
    }
})

//UPDATE Route Book
router.put('/:book_id', async (req, res) => {
    if (req.currentUser?.clearance !== 'admin') {
        return res.status(403).json({ message: 'You are not allowed to do this' })
    }
    let book_id = Number(req.params.book_id)
    if (isNaN(book_id)) {
        res.status(404).json({ message: `Invalid id "${book_id}` })
    }
    else {
        const book = await Book.findOne({
            where: { book_id: book_id }
        })
        if (!book) {
            res.status(404).json({ message: `Invalid id "${book_id}` })
        }
        else {
            Object.assign(book, req.body)
            await book.save()
            res.json(book)
        }
    }
})

//DELETE Route Book Stub
router.delete('/:book_id', async (req, res) => {
    console.log("DELETE: ", req.currentUser)
    if (req.currentUser?.clearance !== 'admin') {
        return res.status(403).json({ message: 'You are not allowed to do this' })
    }
    let book_id = Number(req.params.book_id)
    if (isNaN(book_id)) {
        res.status(404).json({ message: `Invalid id "${book_id}` })
    }
    else {
        const book = await Book.findOne({
            where: { book_id: book_id }
        })
        if (!book) {
            res.status(404).json({ message: `Invalid id "${book_id}` })
        }
        else {
            await book.destroy()
            res.json(book)
        }
    }
})

//CREATE Route Posts
router.post('/:book_id/posts', async (req, res) => {
    const book_id = Number(req.params.book_id)
    const book = await Book.findOne({
        where: { book_id: book_id }
    })

    if (!book) {
        res.status(404).json({ message: `Could not find book with id "${book_id}` })
    }
    console.log("currentUser: ", req.currentUser)
    if (!req.currentUser) {
        return res.status(404).json({
            message: `You must be logged in to post`
        })
    }

    const post = await Post.create({
        ...req.body,
        user_id: req.currentUser.user_id,
        book_id: book_id
    })

    res.send({
        ...post.toJSON(),
        user: req.currentUser
    })

})

//DELETE Route posts
router.delete('/:book_id/posts/:post_id', async (req, res) => {
    let book_id = Number(req.params.book_id)
    let post_id = Number(req.params.post_id)

    if (isNaN(book_id)) {
        res.status(404).json({ message: `Invalid id "${book_id}"` })
    }
    else if (isNaN(post_id)) {
        res.status(404).json({ message: `Invalid id "${post_id}"` })
    }
    else {
        const post = await Post.findOne({
            where: { post_id: post_id, book_id: book_id }
        })
        if (!post) {
            res.status(404).json({ message: `Could not find post with id "${post_id}" for book with id ${book_id}` })
        }
        else if (post.user_id !== req.currentUser?.user_id) {
            res.status(403).json({
                message: `You do not have permission to delete post "${post.post_id}`
            })
        }
        else {
            await post.destroy()
            res.json(post)
        }
    }
})

module.exports = router