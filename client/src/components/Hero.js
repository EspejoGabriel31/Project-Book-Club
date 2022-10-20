import React from 'react'
import './Hero.css'
import {AiOutlineSearch} from 'react-icons/ai'




const Hero = () => {
  return (
    <div>Welcome to our book club!
    <form>
        <div className="banner">
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

/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button size="sm" variant="outline-primary">
                Search
              </Button>
            </Form>
 */