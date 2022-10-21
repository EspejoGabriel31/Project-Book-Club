import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router"
import { CurrentUser } from '../contexts/CurrentUser';
import Registration from './Registration';
import Login from './Login'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from '../pictures/logo/eorlogo.png'
import './Navbar.css'

const Navigation = () => {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li className='nav-item'>
                <Login />
            </li>
            <li className='nav-item'>
                <Registration />
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <>
                <li className='nav-item'>
                    Logged in as {currentUser.first_name} {currentUser.last_name}
                </li>
                <li className='nav-item'>
                    <a href="#" onClick={logout}>Logout</a>
                </li>
            </>

        )
    }

    async function logout() {
        localStorage.removeItem('token')
        window.location.reload()
        navigate("/")
    }

    return (
        /*
        <div className= 'navbar'>
        <div className= "container">
                <a 
                    href="#" 
                    onClick={()=> navigate('')}>
                    <h1 style= {{ marginLeft: '1rem', color: '#00d8ff'}} >
                        East of Reading
                    </h1>    
                </a>
            
            <ul className="nav">
                <li className="nav-item">
                    <a 
                        href="#"
                        onClick={() => navigate('/books')}
                    >New Releases</a>
                </li>
                <li className="nav-item">
                    <a href="/">Reviews</a>
                </li>
                <li className="nav-item">
                    <a href="/">Genres</a>
                </li>
                {/* <li className="nav-item">
                    <a href="#" onClick={() => navigate("/login")}>Login</a>
                </li> }
                {loginActions}                
            </ul>
                </div>
            </div>
            */
        <div>
            <Navbar bg="black" expand="md" className="me-auto fixed-top"
                style={{
                    justifyContent: "center",
                    backgroundColor: "#A0522D",
                    height: "150px",
                    sticky: "top"
                }}>
                <Container fluid>
                    <Navbar.Brand href="/" id='logo'>
                        <img className="me-auto" alt="logo" src={Logo} />
                        East of Reading
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="flex-grow-1 justify-content-evenly" >
                            <Nav.Link id='navLink' href="/books" >New Releases</Nav.Link>
                            <Nav.Link id='navLink' href="/" >Reviews</Nav.Link>
                            <NavDropdown title="Genres" id="navDrop" >
                                <NavDropdown.Item href="/">Fantasy</NavDropdown.Item>
                                <NavDropdown.Item href="/">Comedy</NavDropdown.Item>
                                <NavDropdown.Item href="/">Fiction</NavDropdown.Item>
                                <NavDropdown.Item href="/">Romance</NavDropdown.Item>
                                <NavDropdown.Item href="/">Memoir</NavDropdown.Item>
                                <NavDropdown.Item href="/">Literature</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="">{loginActions} </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation