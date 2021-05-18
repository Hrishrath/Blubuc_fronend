import React, {useEffect, useState} from 'react'
import { getAllBlogs } from './helper/blog'
import HRecipeCard from './Shared/HRecipeCard'

const Blogs = () => {

    const [blogs, setBlogs] = useState()
    const [values, setValues] = useState({
        error: "", 
        success:false
    })
   
    const preload = () => {
        getAllBlogs().then(
            data => {
                if(data.error)
                {
                    setValues({...values, error:data.error})
                }
                else{
                    setBlogs([...data])
                    console.log("DATA: ",JSON.stringify(data))
                    console.log("Blogs: ",blogs)
                }
            }
        )
    }

    useEffect(() => {
       preload();
    }, [])

    const showCards = blogs?blogs.map((blog, index) =>{
        return(
            <div key = {index} className="col-lg-6">
            <HRecipeCard 
            img = "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"
            pos = {index+1}
            title = {blog.title}
            desc = {blog.description}
            id = {blog._id}
            />
            </div>
        )
    } ): ""



  return (
    <section id="blogList" className="blogList">
      <div className="container">

        {/* <div className="section-title">
          <h2><span>Most Popular </span>this week</h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div> */}

        <div className="row">
            {showCards}
        </div>

      </div>
    </section>
  )
}

export default Blogs
