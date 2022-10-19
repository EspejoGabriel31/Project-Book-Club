import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useContext} from 'react'
import { CurrentUser } from '../contexts/CurrentUser';
import {useNavigate} from "react-router"
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
    const response = await fetch(`http://localhost:7000/authentication`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    const data = await response.json()
    if (response.status === 200){
      setCurrentUser(data.user)
      navigate(`/`)
    }
    else{
      setErrorMessage(data.message)
    }
  }

  return (
    <>
        <button className="nav-item" onClick={handleShow}>Sign In</button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={(account.email)}
            onChange={e => setAccount({...account, email: e.target.value})}/>
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
            onChange={e => setAccount({...account, password: e.target.value})}/>
        </Form.Group>
      </Form>
      </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

