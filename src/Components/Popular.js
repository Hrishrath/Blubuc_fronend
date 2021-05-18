import React, { useState, useEffect } from 'react'
import { getAllBlogs } from './helper/blog'
import HRecipeCard from './Shared/HRecipeCard'


const Popular = () => {

    const [blogs, setBlogs] = useState();
    const [values, setValues] = useState({
      error:""
    });
    

    const preload = () => {
      getAllBlogs().then(
          data => {
              if(data.error)
              {
                  setValues({...values, error:data.error})
              }
              else{

                let sorted = data.sort(function (a, b) {
                  return b.likedBy.length-a.likedBy.length
                });;

                  setBlogs([...sorted])
                  console.log("DATA: ",data)
                  console.log("Blogs: ",blogs)
              }
          }
      )
  }

  useEffect(() => {
     preload();
  }, [])


  const sortBlogs = async(arr) =>
  {
      arr.sort(function (a, b) {
      return b.likedBy.length-a.likedBy.length
    });

  }


    const showCards = blogs?blogs.map((blog, i) =>{
      if(i<10)
      {
        return(
            <div key = {i} className="col-lg-6 mb-1">
            <HRecipeCard 
            img = "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"
            pos = {i+1}
            title = {blog.title}
            desc = {blog.description}
            id = {blog._id}
            />
            </div>
        )
      }
    } ):""

  return (
    <section id="popular" className="popular">
      <div className="container">

        <div className="section-title">
          <h2><span>Most Popular </span>this week</h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">
            {showCards}
        </div>

      </div>
    </section>
  )
}

export default Popular
