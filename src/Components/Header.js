// import axios from 'axios'
import React, { Fragment } from 'react'
import { isAuthenticated, signout } from './helper/auth'


const Header = () => {

  const profile = isAuthenticated().user;

  const handleSignOut = (e) => {
    e.preventDefault();
     signout()
    .then(
      () => {
        window.location.href = "/";
      }
    );
  }


  return (
    <Fragment>
    <nav className="navbar navbar-expand-lg header-scrolled px-2">
<div className="container-fluid px-4">
  <a className="navbar-brand" href="/">blubuc</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fas fa-bars text-white"></i>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <div className = 'ms-auto'>
    <ul className="navbar-nav ml-auto">
     
     {/* <li className="nav-item">
       <a className="nav-link " aria-current="page" href="#">Home</a>
     </li> */}
     <li className="nav-item">
     <div className="dropdown">
 <button className=" nav-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   {isAuthenticated()?"Profile":"SignIn"} &nbsp; <i className="fas fa-caret-down"></i>
 </button>
 <ul className="dropdown-menu header-scrolled" id = "userDropdown" style = {{ color:'white'}} aria-labelledby="dropdownMenuButton1">
 { isAuthenticated() ?
     <>
     <li className="nav-item">
       <a className="nav-link" href={`/profile/${profile._id}`}> <i class="fas fa-user-circle px-2"></i>Profile</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href={`/dashboard/${profile._id}`}><i class="fas fa-suitcase px-2"></i>My Dashboard</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="" onClick = {handleSignOut}><i class="fas fa-sign-out-alt px-2"></i>Logout</a>
     </li>
     </>
     : <> 
     <li className="nav-item">
       <a className="nav-link" href="/signin"><i class="fas fa-sign-in-alt px-2"></i>SignIn</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="/signup"><i class="fas fa-user-plus px-2"></i>SignUp</a>
     </li>
     </>
 }
   {/* <li><a className="dropdown-item" style = {{ color:'wheat'}} href="#">Action</a></li>
   <li><a className="dropdown-item" style = {{ color:'wheat'}} href="#">Another action</a></li>
   <li><a className="dropdown-item" style = {{ color:'wheat'}} href="#">Something else here</a></li> */}
 </ul>
</div>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="/about">About</a>
     </li>
     {/* <li className="nav-item">
       <a className="nav-link" href="#">Pricing</a>
     </li> */}
   
     {/* { isAuthenticated() ?
     <li className="nav-item">
       <a className="nav-link" href="" onClick = {handleSignOut}>Sign Out</a>
     </li>
     
     : <> 
     <li className="nav-item">
       <a className="nav-link" href="/signin">SignIn</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="/signup">SignUp</a>
     </li>
     
     </>
     } */}
     
   </ul>
    </div>
   
  </div>
  
</div>
</nav>
  </Fragment>
  )
}

export default Header
