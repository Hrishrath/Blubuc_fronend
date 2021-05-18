import React from 'react'
import profile_pic from '../img/profile-pic.png'

const About = () => {
  return (
    <div className = "about py-3 mt-0">
      <div className="container">
      <div className ="row">

      <div className = "col-4">
        <img src = {profile_pic} alt = "profile" className =  "img-fluid"></img>
      </div>
       
      <div className = "col-8 ">
      <h2 className ="text-center">About</h2>
        <div className = "w-75 mx-auto">
        <p>
        My name is Rishabh Rathore.
        <br/> I am a Software developer & a Home cook
        </p>
        <p style ={{fontSize:'1em'}}>
        This blog is for everyone who love cooking and for those who want to learn.

        <br/><br/>I love cooking since my childhood and i love to experiment with new things bring
        out the new taste with new recipes though sometimes they taste like disaster  
        &nbsp;<i class="far fa-grin-beam-sweat"></i>
        &nbsp;
        <i class="far fa-grin-beam-sweat"></i> 
        &nbsp;
        but thats the beauty of cooking.

        <br/> <br/>So I wanna take you to this journey of learning together where we explore new recipes,
        learn together & try to know the history behind it.

        <br/><br/>I am excited <i class="far fa-smile-beam"></i> are you...?
        </p>
        </div>
      </div>
      

      </div>
      
      </div>
    </div>
  )
}

export default About
