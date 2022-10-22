import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function About() {
    return (
        <div>
            <Container className="justify-content-evenly">
                <Card style={{ padding: '50px', background: 'radial-gradient(circle, rgba(255, 244, 180, 1) 0%, rgba(255, 224, 49, 1) 100%)' }}>
                    <p>East of Reading is a rating book site that welcomes anyone who loves to read and
                        share what they love about books. The website is a Book Club with various books
                        from all across the globe that Users visiting the site,
                        can find then join in the discussions of each of those different genres of books.</p>
                </Card>
            </Container>
        </div>
    )
}

export default About