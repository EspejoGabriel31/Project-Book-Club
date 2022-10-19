import React, {useState, useEffect, useContext} from 'react'
import './Navbar.css'
import {useNavigate} from "react-router"
import { CurrentUser } from '../contexts/CurrentUser';
import Registration from './Registration';
import Login from './Login'


const Navbar = () => {

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

    if (currentUser){
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

    async function logout(){
        localStorage.removeItem('token')
        window.location.reload()
        navigate("/")
    }

    return (
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
                    <a href="/">New Releases</a>
                </li>
                <li className="nav-item">
                    <a href="/">Reviews</a>
                </li>
                <li className="nav-item">
                    <a href="/">Genres</a>
                </li>
                {/* <li className="nav-item">
                    <a href="#" onClick={() => navigate("/login")}>Login</a>
                </li> */}
                {loginActions}                


            </ul>
                </div>
            </div>


  )
}

export default Navbar