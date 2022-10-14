import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react'

export default function Registration() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    return (
        <div clasName="regisContainer">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="first-name" placeholder="First name" value={(user.firstName)}
                onChange={e => setUser({...user, firstName: e.target.value})}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="last-name" placeholder="Last name" value={(user.lastName)}
                onChange={e => setUser({...user, lastName: e.target.value})}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={(user.email)}
                onChange={e => setUser({...user, email: e.target.value})}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={(user.password)}
                onChange={e => setUser({...user, password: e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    );
}