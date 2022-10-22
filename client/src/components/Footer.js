import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css'

export default function Footer() {
    return (
            <Container className='fixed-bottom' fluid style={{backgroundColor: 'black'}}>
                <Row id='footer-item'>
                    <Col>
                        <a className='footer-link' href='/about'>About Us </a>
                    </Col>
                    <Col>
                        <a className='footer-link' href='/contact'>Contact Us </a>
                    </Col>
                    <Col>
                        <a className='footer-link' href='/term' >Term Of Services </a>
                    </Col>
                    <Col>
                        <a className='footer-link' href='/privacy'>Privacy </a>
                    </Col>
                    <Col>
                        Copyright &copy; BookClub 2022
                    </Col>
                </Row>
            </Container>
    )
}