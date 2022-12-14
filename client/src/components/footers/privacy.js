import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'

function Privacy() {
    return (
        <div>
            <Container className="justify-content-center" style={{margin: '0 auto', display: 'flex'}}>
                <Card className='text-center' style={{ width: '70%', margin: '50px', padding: '50px', background: 'radial-gradient(circle, #0059ff, #00ffff)' }}>
                    <Card.Text style={{fontSize: '25px'}}>Updating Privacy</Card.Text>
                </Card>
            </Container>
        </div >
    )
}

export default Privacy 