import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router"

export default function Registration() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:7000/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate(`/`)
    }
    return (
        <div clasName="regisContainer">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="first_name">
                <Form.Label>First name</Form.Label>
                <Form.Control 
                    type="first-name" 
                    placeholder="First name" 
                    value={(user.first_name)}
                    onChange={e => setUser({...user, first_name: e.target.value})}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="last_name">
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                    type="last-name" 
                    placeholder="Last name" 
                    value={(user.last_name)}
                    onChange={e => setUser({...user, last_name: e.target.value})}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={(user.email)}
                    onChange={e => setUser({...user, email: e.target.value})}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisPass">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={(user.password)}
                    onChange={e => setUser({...user, password: e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    );
}