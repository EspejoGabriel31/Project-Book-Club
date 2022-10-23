import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'

export default function BookList(data) {
    const navigate = useNavigate()
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}books`)
            const resBook = await response.json()
            setBooks(resBook)
        }
        getBooks()
    }, [])

    let booksListing = books.map((book) => {
        return (
            <div className="bookContainer" key={book.book_id}>
                <h3>
                    <button onClick={() => navigate(`/book/${book.book_id}`)}>
                        {book.book_name}
                    </button>
                </h3>
                <h4>{book.book_author}</h4>
                <p>
					{book.genre}
				</p>
                
                
                <hr/>
            </div>
        )
    })
    return (
        <div>
            <h1> 
                Recently Added Books
            </h1>
            <div>
                {booksListing}
            </div>
        </div>
    )
}