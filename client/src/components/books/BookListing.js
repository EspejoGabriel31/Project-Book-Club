// import { useContext } from "react"
// import { CurrentUser } from "../../contexts/CurrentUser"
import { useNavigate } from 'react-router'
function BookListing({ book }) {
    const navigate = useNavigate()

    return (
        <div className="bookContainer">
            <h3>
                <button className="title-button" onClick={() => navigate(`/book/${book.book_id}`)}>
                    {book.book_name}
                </button>
            </h3>
            <h4>{book.book_author}</h4>
            <p>{book.genre}</p>
            <hr />
        </div>
    )
}

export default BookListing