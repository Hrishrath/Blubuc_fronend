import React from 'react'

const HRecipeCard = (props) => {
  return (
   
            <div className="box" onClick = {() => {window.location.href= `/blog/${props.id}`}}>
            <div className="row">
            <div className = "col-lg-4 recImg">
            <img src = {props.img}></img>
            </div>
            <div className = "col-lg-8 recText">
            <span>{props.pos}</span>
              <h4>{props.title}</h4>
              <p>{props.desc}</p>
            </div>
            </div>
              
            
          </div>
  )
}

export default HRecipeCard
