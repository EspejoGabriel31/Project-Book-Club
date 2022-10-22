import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
// import { useNavigate } from "react-router"
import Modal from 'react-bootstrap/Modal';

export default function Registration() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const navigate = useNavigate()

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        // console.log('does something')
        e.preventDefault()
        console.log(user)
        await fetch(`http://localhost:7000/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        handleClose()
    }
    return (
        <>
            <button className="nav-item" onClick={handleShow}>Register</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: '#0059ff'}}>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  id="register"> {/* onSubmit on Form needs to be handleSubmitonSubmit={handleSubmit} */}
                        <Form.Group className="mb-3" controlId="first_name">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="first-name"
                                placeholder="First name"
                                value={(user.first_name)}
                                onChange={e => setUser({ ...user, first_name: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="last_name">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="last-name"
                                placeholder="Last name"
                                value={(user.last_name)}
                                onChange={e => setUser({ ...user, last_name: e.target.value })} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="regisEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                pattern="^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$"
                                value={(user.email)}
                                onChange={e => setUser({ ...user, email: e.target.value })} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="regisPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required 
                                minLength={8}
                                value={(user.password)}
                                onChange={e => setUser({ ...user, password: e.target.value })} />
                        </Form.Group>
                        <Button style={{color: 'white'}} onClick={handleClose}>
                            Close
                        </Button>
                        <Button 
                            style={{color: 'white'}} 
                            type="submit" 
                            form="register" 
                            onClick={handleSubmit}>
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}