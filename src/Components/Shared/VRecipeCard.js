import React from 'react'

const VRecipeCard = (props) => {
  return (
  
    <div className="card card-blog" >
        <div className="card-image">
            <img className="img" src={props.img}/>
                <div className="card-caption"> {props.title} </div>
            
            <div className="ripple-cont"></div>
        </div>
        <div className="table">
            <h6 className="rating">Rating: {props.rating} </h6>
            <h6 className="rating">Category: {props.category} </h6>
            <p className="card-description"> Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus odio antement, feugiat eget nisi sit amet, scelerisque dignissim velit antement. </p>
        </div>
    </div>
  )
}

export default VRecipeCard
