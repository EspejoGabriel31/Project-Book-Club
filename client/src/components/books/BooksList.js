import { useEffect, useState, useContext } from 'react'
import { CurrentUser } from "../../contexts/CurrentUser";
import NewBookForm from './NewBookForm'
import BookListing from './BookListing';
import './BookDetail.css'
export default function BookList(data) {
    const [books, setBooks] = useState([])
    const { currentUser } = useContext(CurrentUser)

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}books`)
            const resBook = await response.json()
            setBooks(resBook)
        }
        getBooks()
    }, [])

    let booksListing = (
        <h3 className="inactive">
            No books found
        </h3>
    )

    if (books.length) {
        booksListing = books.map(book => {
            return (
                <BookListing key={book.book_id} book={book}/>
            )
        })
    }

    let addBookButton = null
    if (currentUser) {
        addBookButton = (
            <div className='new-book-button'>
                <NewBookForm />
            </div>
        )
    }

    return (
        <div>
            <h1>
                Recently Added Books
            </h1>
            {addBookButton}
            <div>
                {booksListing}
            </div>
        </div>
    )
}