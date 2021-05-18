
import React, { useState, useEffect } from 'react';
import CKEditor from 'ckeditor4-react';

import '../postarticle.css'
import { createBlog, getBlog } from './helper/blog';
import { isAuthenticated } from './helper/auth';


const BlogEditor = (props) => {
   
  const [blogValues, setBlogValues] = useState({
    title: "",
    description: "",
    featImage: "",
    content: "",
    error: "",
    success: false
  })
  
  const { title, description, featImage, content, error, success, update } = blogValues;

  const user = isAuthenticated();

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
      update: true
    })
    setBlogValues({...blogValues, content:data.content})
    
  }
    
    })
  };


 if(props.match.params.blogId && update == false)
 {
    preload();
 }

 const performRedirect = () => {
  return window.location.href = "/";
};

  const onEditorChange = (data) => {
    //console.log(data.editor.getData())
    setBlogValues({...blogValues, content: data.editor.getData()})
    console.log(blogValues)
  }  

  const handleBlogChange = name => (e) => {
    e.preventDefault();
    setBlogValues({...blogValues, [name]: e.target.value })
    console.log(blogValues);
  }


  const submitBlog = (e) => {
      e.preventDefault();
      const blogData = {title, description, featImage, content}
      let emptyKeys = "";
      for(const key in blogData)
      {
        if(blogData[key] == "")
      {
       return console.log(key + " is Empty")
      }
      }
      blogData.writer = user.user._id;
      createBlog(blogData,  user.token ).then(
        (data) => {
          if(data.error)
          {
              setBlogValues({...blogValues, error:data.error, success: false });
              console.log("err: "+error)
          }
          else {
            setBlogValues({title: "",
            description: "",
            featImage: "",
            content: "",
            error: "",
            success: true
           });
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
      <h2 className="active"> Post Article </h2>
      
  
      {/* <!-- Icon --> */}
      <div className="fadeIn first">

      </div>
  
      {/* <!-- Login Form --> */}
      <form>
        <input type="text" id="Heading" className="fadeIn second" onChange = {handleBlogChange("title")} value = {title} name="heading" placeholder="Heading"/>
        <input type="text" id="description" className="fadeIn second"  onChange = {handleBlogChange("description")} value = {description} name="description" placeholder="Description"/>
        <input type="text" id="Feat_img" name="feat_img"  onChange = {handleBlogChange("featImage")} value = {featImage} placeholder = "Image Url"/>
        <CKEditor id= "editor"  onChange = {onEditorChange} data = {content}/> 
        <input type="submit" onClick = {submitBlog} className="fadeIn fourth" value="Post"/>
      </form>
  
    </div>
  </div>


    
  )
}

export default BlogEditor
