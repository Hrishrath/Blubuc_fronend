import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { isAuthenticated, Signup } from './helper/auth'


const SignUp = () => {

  const { user } = isAuthenticated();

  const history = useHistory()

    const [signUpvalues, setSignUpValues ] = useState({
      name:"",
      lastname: "",
      email:"",
      password:"",
      error: "",
      loading: false,
      success: false,
    })


   
    const {name, lastname, email, password, error, loading, success} = signUpvalues
      
   

    const performRedirect = () => {
      if (success) {
        if (user && user.role === 1) {
          return window.location.href = "/";
        } else {
          return window.location.href = "/";
        }
      }
      if (isAuthenticated()) {
        return window.location.href = "/";
      }
    };


    const SignUpChanges = name => e => {
      e.preventDefault();
      if(name == "cpassword" &&
       e.target.value.length == password.length &&
       e.target.value == password
       )
      {
        setSignUpValues({...signUpvalues, error: "Password Does not match"});
      }
      else{
      setSignUpValues({...signUpvalues, [name]: e.target.value, error: ""})
      }
      
    }
    
    const handleSignUp = (e) => {
      e.preventDefault();
      Signup({name, lastname, email, password}).then((data) => {
        if(data && data.error)
        {
          setSignUpValues({...signUpvalues, error: data.error, success: false})
        }
        else{
          setSignUpValues({...signUpvalues, name: "", lastname: "", email: "", password: "", error:"", success: true})
        }
      })
      .catch(console.log("Signup Failed"))
    }

    
    const SignUpForm = () => {
        return(
           
<div className="page-wrapper">
          <div className="wrapper wrapper--w680">
              <div className="card card-4">
                  <div className="card-body text-center">
                  <h2 className="mb-2">Welcome to <b className ="text-warning">blubuc</b>  </h2>
                      <h4 className="mb-3">Sign Up</h4>
                      <form>
                          <div className="row row-space">
                              <div className="col-12">
                                  <div className="input-group">
                                      <input className="input--style-4" onChange = {SignUpChanges("name")}  type="text" name="first_name" value = {name} placeholder="First Name"/>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="input-group">
                                      <input className="input--style-4"   onChange = {SignUpChanges("lastname")} type="text" name="last_name" value = {lastname} placeholder="Last Name"/>
                                  </div>
                              </div>
                          </div>
                          <div className="row row-space">
                              <div className="col-12">
                                  <div className="input-group">
                                      <input className="input--style-4" onChange = {SignUpChanges("email")} type="email" name="email" value = {email} placeholder="Email"/>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="input-group">
                                      <input className="input--style-4" onChange = {SignUpChanges("password")} type="password" name="password" value = {password} placeholder="Password"/>
                                  </div>
                              </div>
                          </div>
                          <div className="row row-space">
                              <div className="col-12 text-center mt-3">
                              <button className="btn btn-primary w-75"  onClick = { handleSignUp } type="submit">Submit</button>
                              </div>
                          </div>
                          <div className="row row-space">
                              <div className="col-12 mt-2">
                              <p>Already a member? <span className = "text-primary cursor-pointer" onClick = {()=>{history.push('/signin')}}>Login here</span></p>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
        )
    }

  return (
    <div className="signup">
        {!isAuthenticated() ? 
        <>
        { SignUpForm() }
        </>
        :
        <>
        { alert("You can't signup without log out")}
        </>
        }
        { performRedirect() }
     
   </div>
  )
}

export default SignUp
