import React from 'react'
import styles from './Hero.css'
import {AiOutlineSearch} from 'react-icons/ai'
import backI from '../pictures/Hero2.jpg'



const Hero = () => {
  return (
    <div>Welcome to our book club!{styles.hero}
    <form>
        <div className={styles.hero}>
            <label>Find:  </label>
            <input type="text" placeholder='Search Site' />
        <div className="container">
            <img src={backI} />
            </div>    
        </div>

    </form>
    
    </div>
  )
}

export default Hero