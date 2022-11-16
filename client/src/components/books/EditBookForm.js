import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react"
import { useParams } from "react-router"

export default function EditBookForm() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { book_id } = useParams()

    const [book, setBook] = useState({
        book_name: '',
        book_author: '',
        picture: '',
        genre: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}books/${book_id}`)
            const resData = await response.json()
            setBook(resData)
        }
        fetchData()
    }, [book_id])

    async function handleSubmit(e) {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_SERVER_URL}books/${book.book_id}`, {
            method: `PUT`,
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
            <button className="edit-book-modal-show" onClick={handleShow}>Edit Book</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: '#0059ff' }}>Edit Book</Modal.Title>
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
                    <Button
                        style={{ color: 'white' }}
                        type="submit"
                        form='addBook'
                        onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button style={{ color: 'white' }} onClick={handleClose}>Close</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}