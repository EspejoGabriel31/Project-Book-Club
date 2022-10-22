import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div>
    <form>
        <div className="banner">
            <div className="hero-text">
                <label>Look up:  </label>
                <input type="text" className='hero-search-bar' placeholder='  Novels, Manga, etc' />
                <p>   </p> 
                <button>Search</button>
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