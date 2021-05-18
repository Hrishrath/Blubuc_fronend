
import React, { useState, useEffect } from 'react';
import CKEditor from 'ckeditor4-react';

import '../postarticle.css'
import { updateBlog, getBlog } from './helper/blog';
import { isAuthenticated } from './helper/auth';


const UpdateBlog = (props) => {
   
  const [blogValues, setBlogValues] = useState({
    title: "",
    description: "",
    featImage: "",
    content: "",
    error: "",
    success: false
  })
  
  const user = isAuthenticated();
  const { title, description, featImage, content, error, success } = blogValues;


  const preload = () => {
    getBlog(props.match.params.blogId).then(data => {
      if(data.error){
        console.log("err: " + error)
      }
      else{
      setBlogValues({...blogValues, 
      title:data.title,
      description:data.description,
      featImage:data.featImage,
      content:data.content
    })
 
  }
    
    })
  };


 useEffect(() => {
  preload();
 }, [])
    
 
 const performRedirect = () => {
  return window.location.href = "/";
};


  const onEditorChange = (data) => {

    setBlogValues({...blogValues, content: data.editor.getData()})
    console.log(blogValues)
  }  

  const handleBlogChange = name => (e) => {
    e.preventDefault();
    setBlogValues({...blogValues, [name]: e.target.value })
    console.log(blogValues);
  }


  const alterBlog = (e) => {
      e.preventDefault();
      const blogData = {title, description, featImage, content}
      for(const key in blogData)
      {
        if(blogData[key] == "")
      {
       return console.log(key + " is Empty")
      }
      }
      blogData.writer = user.user._id;
      updateBlog(blogData, props.match.params.blogId ,user.token ).then(
        (data) => {
          if(data.error)
          {
              setBlogValues({...blogValues, error:data.error, success: false });
              console.log("err: "+error)
          }
          else {
            setBlogValues({ title: "",
            description: "",
            featImage: "",
            content: "",
            error: "",
            success: true });
            console.log("Blog Saved Successfully");
            performRedirect();
          }
        }
      )
  }
  
  return (


<div className="wrapper fadeInDown blog-editor">
    <div id="formContent">
      {/* <!-- Tabs Titles --> */}
      <h2 className="active"> Update Article </h2>
      
  
      {/* <!-- Icon --> */}
      <div className="fadeIn first">

      </div>
  
      {/* <!-- Login Form --> */}
      <form>
        <input type="text" id="Heading" className="fadeIn second" onChange = {handleBlogChange("title")} value = {title} name="heading" placeholder="Heading"/>
        <input type="text" id="description" className="fadeIn second"  onChange = {handleBlogChange("description")} value = {description} name="description" placeholder="Description"/>
        <input type="text" id="Feat_img" name="feat_img"  onChange = {handleBlogChange("featImage")} value = {featImage} placeholder = "Image Url"/>
        <CKEditor id= "editor"  onChange = {onEditorChange} data = {content}/> 
        <input type="submit" onClick = {alterBlog} className="fadeIn fourth" value="Update"/>
      </form>
  
    </div>
  </div>


    
  )
}

export default UpdateBlog
