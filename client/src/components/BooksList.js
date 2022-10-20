import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'

export default function BookList(data) {
    const navigate = useNavigate()
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch(`http://localhost:7000/books`)
            const resBook = await response.json()
            console.log(resBook)
            setBooks(resBook)
        }
        getBooks()
    }, [])

    let booksListing = books.map((book) => {
        return (
            <div className="bookContainer" key={book.bookId}>
                <img style={{ maxWidth: 200 }} src={book.picture} alt={book.name} />
                <h3>
                    <a href="#" onClick={() => navigate(`/books/${book.bookId}`)}>
                        {book.name}
                    </a>
                </h3>
                <h4>
                    <a href="#" onClick={() => navigate(`/books/${book.bookId}`)}>
                        {book.author}
                    </a>
                </h4>
                <p className="text-center">
					{book.genre}
				</p>
            </div>
        )
    })
    return (
        <main>
            <h1> 
                Recently Rating Books
            </h1>
            <div>
                {booksListing}
            </div>
        </main>
    )
}