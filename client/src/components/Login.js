import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'

export default function Login() {
  const [account, setAccount] = useState({
    email: '',
    password: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()
  }

  return (
      <div clasName="loginContainer">
      <h1>Log In</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={(account.email)}
                onChange={e => setAccount({...account, email: e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPass">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={(account.password)}
                onChange={e => setAccount({...account, password: e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

