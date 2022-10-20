import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react'
import { CurrentUser } from '../contexts/CurrentUser';
import { useNavigate } from "react-router"
import Modal from 'react-bootstrap/Modal';

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const { setCurrentUser } = useContext(CurrentUser)

  const [account, setAccount] = useState({
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:7000/authentication/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    const data = await response.json()
    if (response.status === 200) {
      setCurrentUser(data.user)
      localStorage.setItem('token', data.token)
      handleClose()
    }
    else {
      setErrorMessage(data.message)
    }
  }

  return (
    <>
      <button className="nav-item" onClick={handleShow}>Sign In</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: '#0059ff'}}>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form id="login" onSubmit={handleSubmit}> {/* onSubmit on Form needs to be handleSubmit */}
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                pattern="^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$"
                value={(account.email)}
                onChange={e => setAccount({ ...account, email: e.target.value })} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={(account.password)}
                onChange={e => setAccount({ ...account, password: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} style={{color: 'white'}}>
            Close
          </Button>
          <Button onClick={handleClose} form="login"
            type="submit"
            style={{color: 'white'}}
          >
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

