import axios from 'axios'
import {Base_Url} from '../../backend'

export const Signup = user => {
  return fetch(`${Base_Url}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then( res => {
        console.log(res);
         return res.json();
    })
    .catch( err => console.log("Error",err)); 
}




export const Signin = user => {

    return fetch(`${Base_Url}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };



export const signout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
     
  
      return fetch(`${Base_Url}/signout`, {
        method: "GET"
      })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
  };


export const authenticate = (data, next) => {
    if(typeof window != undefined)
    {
        localStorage.setItem("jwt", JSON.stringify(data));
    }
    next();
}


export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
      }
      if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
      } else {
        return false;
      }
}