import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import {FaPhone} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {MdMail} from 'react-icons/md'

function Contact() {
    return (
        <div>
            <Container className="justify-content-center" style={{margin: '0 auto', display: 'flex'}}>
                <Card className='text-center' style={{ width: '100%', margin: '50px', padding: '50px', background: 'radial-gradient(circle, #0059ff, #00ffff)' }}>
                <Card.Header as="h5"> East of Reading</Card.Header>
                <Card.Text><FaPhone /> +1 111-111-1111</Card.Text> 
                <Card.Text><HiLocationMarker /> 1250 Bellflower Blvd, Long Beach, CA 90840 </Card.Text> 
                <Card.Text><MdMail /> eastofreading@mail.com</Card.Text> 
                </Card>
            </Container>
        </div >
    )
}

export default Contact  