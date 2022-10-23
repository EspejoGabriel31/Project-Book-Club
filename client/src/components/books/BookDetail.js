import { useEffect, useState } from "react";
import { useParams } from "react-router"
import PostContainer from "../posts/PostContainer";
import NewPost from "../posts/NewPost";
import './BookDetail.css'

function BookDetail() {

    const { book_id } = useParams()

    const [book, setBook] = useState(null)

    useEffect(() => {
        const getBook = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}books/${book_id}`)
            const resData = await response.json()
            console.log(resData)
            setBook(resData)
        }
        getBook()
    }, [book_id])

    if (book === null) {
        return <h1>Loading</h1>
    }

    // function editBook() {

    // 	navigate(`/books/${book.book_id}/edit`)

    // }

    // async function deleteBook() {
    // 	await fetch(`http://localhost:7000/books/${book.book_id}`, {
    // 		method: 'DELETE'
    // 	})
    // 	navigate('/books')
    // }

    async function deletePost(deletedPost) {

        await fetch(`${process.env.REACT_APP_SERVER_URL}books/${book.book_id}/posts/${deletedPost.post_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        setBook({
            ...book,
            posts: book.posts
                .filter(post => post.post_id !== deletedPost.post_id)
        })
    }

    async function createPost(postAttributes) {
        console.log('post attributes:\n', postAttributes)
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}books/${book.book_id}/posts`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postAttributes)
        })

        const post = await response.json()

        setBook({
            ...book,
            posts: [
                ...book.posts,
                post
            ]
        })

    }


    let posts = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )

    if (book.posts.length) {
        posts = book.posts.map(post => {
            console.log(post)
            return (
                <PostContainer key={post.post_id} post={post}
                    onDelete={() => deletePost(post)}
                />
            )
        })
    }

    return (
        <div className="book-detail-page">
            <hr></hr>
            <div className="row">
                <div className="col-6">
                    <img className="book-image" src={book.picture} alt={book.book_name} />
                </div>
                <div className="col-6">    
                    <div className="book-title">
                        <p>{book.book_name}</p>
                    </div>
                    <div className="book-author">
                        <strong><p>Author:</p></strong>
                        <p>{book.book_author}</p>
                    </div>
                    <div className="book-genre">
                        <strong><p>Genre:</p></strong>
                        <p>{book.genre}</p>
                    </div>
                    <div className="book-synopsis">
                        <strong><p>Synopsis</p></strong>
                        <p>To be added...</p>
                    </div>
                </div>
            </div>
            <hr />
            <h2>Comments</h2>
            <div className="row">
                {posts}
            </div>
            <hr />
            <NewPost book={book} onSubmit={createPost} />
        </div>
    )
}

export default BookDetail
