import React from 'react'
import styles from './Hero.css'
import './Hero.css'
import {AiOutlineSearch} from 'react-icons/ai'




const Hero = () => {
  return (
    <div>Welcome to our book club!{styles.hero}
    <form>
        <div className={styles.hero}>
            <label>Look up:  </label>
            <input type="text" placeholder='Novels, Manga, etc' />
            <button>Search</button>
        <div className="container">
            
            </div>    
        </div>

    </form>
    
    </div>
  )
}

export default Hero
