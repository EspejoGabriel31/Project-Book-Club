import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registration() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="first-name" placeholder="First name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="last-name" placeholder="Last name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}