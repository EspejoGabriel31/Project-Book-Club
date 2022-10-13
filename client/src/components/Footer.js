import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
            <Container className='fixed-bottom' fluid style={{backgroundColor: 'gray'}}>
                <Row>
                    <Col>
                        <a href='/about'>About Us </a>
                    </Col>
                    <Col>
                        <a href='#term' >Term Of Services </a>
                    </Col>
                    <Col>
                        <a href='/contact'>Contact Us </a>
                    </Col>
                    <Col>
                        <a href='#privacy'>Privacy </a>
                    </Col>
                    <Col>
                        Copyright &copy; BookClub
                    </Col>
                </Row>
            </Container>
    )
}