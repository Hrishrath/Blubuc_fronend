import React from 'react'
import About from './About'
import Blog from './Blog'
import Carousel from './Carousel'
import Category from './Category'
import BlogEditor from './BlogEditor'
import Footer from './Footer'
import Header from './Header'
import Popular from './Popular'



const HomePage = () => {
  return (
    <div className = "">

    
        
         <Carousel/>
        <Popular/>
        <Category/>
       
    </div>
  )
}

export default HomePage
