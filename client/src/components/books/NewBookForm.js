import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react"

export default function NewBookForm() {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [book, setBook] = useState({
        book_name: '',
        book_author: '',
        picture: '',
        genre: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        console.log('book: ', book)
        await fetch(`${process.env.REACT_APP_SERVER_URL}books/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        handleClose()
        window.location.reload(false)
    }

    return (
        <>
            <button className="add-book-modal-show" onClick={handleShow}>Add Book</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: '#0059ff' }}>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="addBook">
                        <Form.Group className="mb-3" controlId="book_name">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Book Title...'
                                value={(book.book_name)}
                                onChange={e => setBook({ ...book, book_name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="book_author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Author...'
                                value={(book.book_author)}
                                onChange={e => setBook({ ...book, book_author: e.target.value })}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="picture">
                            <Form.Label>Cover Image</Form.Label>
                            <Form.Control
                                type="url"
                                placeholder='Cover Image URL...'
                                value={(book.picture)}
                                onChange={e => setBook({ ...book, picture: e.target.value })}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="genre">
                            <Form.Label>Genres</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Genres...'
                                value={(book.genre)}
                                onChange={e => setBook({ ...book, genre: e.target.value })}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ color: 'white' }} onClick={handleClose}>Close</Button>
                    <Button
                        style={{ color: 'white' }}
                        type="submit"
                        form='addBook'
                        onClick={handleSubmit}>
                            Add Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}