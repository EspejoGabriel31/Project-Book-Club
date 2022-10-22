import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'

const poster1 = new URL("../pictures/100YearsOfSolitude1.jpg", import.meta.url)
const poster2 = new URL("../pictures/ChainsawMan1.jpeg", import.meta.url)
const poster3 = new URL("../pictures/ThingsFallApart.jpg", import.meta.url)
const poster4 = new URL("../pictures/ThornBirds.jpg", import.meta.url)

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
            <div className="bookContainer" key={book.book_id}>
                {/* <img style={{ maxWidth: 200 }} src={new URL(book.picture, import.meta.url)} alt={book.book_name} /> */}
                <h3>
                    <a href="#" onClick={() => navigate(`/books/${book.book_id}`)}>
                        {book.book_name}
                    </a>
                </h3>
                <h4>{book.book_author}</h4>
                <p>
					{book.genre}
				</p>
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