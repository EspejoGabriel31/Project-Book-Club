import React, {useState, useEffect, useContext} from 'react'
import './Navbar.css'
import {useNavigate} from "react-router"
import { CurrentUser } from '../contexts/CurrentUser';


const Navbar = () => {

    const history = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    // if (currentUser){

    // }

    return (
        <div className= 'navbar'>
        <div className= "container">
            <h1 style= {{ marginLeft: '1rem', color: '#00d8ff'}} >East of Reading</h1>
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
                <li className="nav-item">
                    <a href="/">About</a>
                </li>
                


            </ul>
                </div>
            </div>


  )
}

export default Navbar