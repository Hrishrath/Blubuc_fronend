import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import slide1 from '../img/slide1.jpg' 
import slide2 from '../img/slide2.jpg' 
import slide3 from '../img/slide3.jpg' 
import slide4 from '../img/slide4.jpeg' 


const Carousel = () => {

	const primaryOptions = {
    type      : 'loop',
    width     : '100%',
    perPage   : 3,
    perMove   : 1,
    gap       : '.3rem',
    pagination: false,
  };


  return (
    <div className = "container-fluid" style = {{marginTop:60}}>
      <Splide options = {primaryOptions} >
  <SplideSlide >
    <img src={slide1} style = {{borderRadius:20}} alt="Image 1" className = "img-fluid"/>
  </SplideSlide>
  <SplideSlide>
    <img src={slide2} style = {{borderRadius:20}} alt="Image 2" className = "img-fluid"/>
  </SplideSlide>
  <SplideSlide>
    <img src={slide4} style = {{borderRadius:20}} alt="Image 4" className = "img-fluid"/>
  </SplideSlide>
</Splide>
</div>

//     <div id="carouselExampleInterval"  className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner car-hgt">
//     <div className="carousel-item active car-hgt" data-bs-interval="5000">
//        <img src={slide1} className="d-block w-100 car-hgt" alt="..."/> 
//     </div>
//     <div className="carousel-item car-hgt" data-bs-interval="2000">
//       <img src={slide2} className="d-block w-100 car-hgt" alt="..."/>
//     </div>
//     <div className="carousel-item car-hgt" data-bs-interval="2000">
//       <img src={slide3} className="d-block w-100 car-hgt" alt="..."/>
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </a>
// </div>
  )
}



export default Carousel





{/* <div className ="row">
    <div className = 'col-md-3 col-lg-3'>
    <div className='row p-0'>
      <div className ="col-12">
      <img src = {slide1} alt = "slide1" className ="img-fluid"/>
      </div>
    </div>
    <div className='row p-0'>
      <div className ="col-12">
      <img src = {slide2} alt = "slide2" className ="img-fluid"/>
      </div>
    </div>

    </div>

    <div className = 'col-md-6 col-lg-6'>
      <img src = {slide2} alt = "slide2" className ="img-fluid"/>
    </div>
    <div className = 'col-md-3 col-lg-3'>
    <div className='row'>
      <div className ="col-12">
      <img src = {slide3} alt = "slide3" className ="img-fluid"/>
      </div>
    </div>
    <div className='row'>
      <div className ="col-12">
      <img src = {slide2} alt = "slide2" className ="img-fluid"/>
      </div>
    </div>


    </div>
    </div> */}