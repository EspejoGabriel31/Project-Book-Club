
import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function Term() {
    return (
        <Container className="justify-content-center" style={{ margin: '0 auto', display: 'flex' }}>
            <Card className='text-center' style={{ width: '70%', margin: '50px', padding: '50px', background: 'radial-gradient(circle, #0059ff, #00ffff)' }}>
                <Card.Text style={{ fontSize: '25px' }}>Updating Terms of Services</Card.Text>
            </Card>
        </Container>
    )
}

export default Term 