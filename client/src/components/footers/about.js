import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function About() {
    return (
        <div>
            <Container className="justify-content-center" style={{margin: '0 auto', display: 'flex'}}>
                <Card className='text-center' style={{ width: '70%', margin: '50px', padding: '50px', background: 'radial-gradient(circle, #0059ff, #00ffff)' }}>
                    <Card.Text style={{ fontSize: '25px', color: 'black' }}>East of Reading is a rating book site that welcomes anyone who loves to read and
                        share what they love about books. The website is a Book Club with various books
                        from all across the globe that Users visiting the site,
                        can find then join in the discussions of each of those different genres of books.</Card.Text>
                </Card>
            </Container>
        </div>
    )
}

export default About