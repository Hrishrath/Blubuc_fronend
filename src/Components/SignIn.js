import React, {useState} from 'react'
import { Signin, authenticate, isAuthenticated } from './helper/auth';
import { Redirect, useHistory } from 'react-router-dom';

const SignIn = () => {

    const { user } = isAuthenticated();
    const history = useHistory();

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    })

    const {email, password, error, loading, didRedirect} = values;


    const SignInChanges = name => e => {
        e.preventDefault();
        setValues({...values, [name]: e.target.value})
    }

    const handleSignIn = e => {
      console.log("Hello")
        e.preventDefault();
        Signin({email, password}).then(
            (data) => {
                if(data.error)
                {
                    setValues({...values, error:data.error, loading: false });
                    console.log("err: "+error)
                }
                else{
                    console.log("Data:"+data);
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            loading: false,
                            didRedirect: true

                        });
                    });
                   
                }
            }
        )
        .catch(error => console.log("CAtch Error"+error))
    }

    




    const performRedirect = () => {
        if (didRedirect) {
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
    
      const loadingMessage = () => {
        return (
          loading && (
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          )
        );
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };
    



    const SignInForm = () => {
        return(
          <div className="page-wrapper">
          <div className="wrapper wrapper--w680">
              <div className="card card-4">
                  <div className="card-body text-center">
                      <h2 className = "mb-2">Welcome to <b className ="text-warning">blubuc</b>  </h2>
                      <h4 className = "mb-3">Sign In</h4>
                      <form>
                        <div className="row row-space">
                              <div className="col-12">
                                  <div className="input-group">
                                      <input className="input--style-4" onChange = {SignInChanges("email")} type="email" value = {email} name="email" placeholder="Email"/>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="input-group">
                                      <input className="input--style-4" onChange = {SignInChanges("password")} type="password" value = {password} name="password" placeholder="Password"/>
                                  </div>
                              </div>
                          </div>
                          <div className="row row-space">
                              <div className="col-12 text-center  m-t-20">
                              <button className="btn btn-primary w-75 mt-3"  onClick = { handleSignIn } type="submit">Submit</button>
                              </div>
                          </div>
                          <div className="row row-space">
                              <div className="col-12 mt-2">
                              <p>New member? <span className = "text-primary cursor-pointer" onClick = {()=>{history.push('/signup')}}>Register here</span></p>
                              </div>
                          </div>
                          <div className="row row-space">
                              <div className="col-md-12 text-center  m-t-20">
                              {errorMessage()}
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
    <div id = "Signin">
    
      {!isAuthenticated() ? 
      <>
      {SignInForm()}
      {loadingMessage()}
      </>
      : 
      <>
      {alert("You are already Signed In")}
      </>
      }

      {performRedirect()} 
            
   </div>
  )
}

export default SignIn
