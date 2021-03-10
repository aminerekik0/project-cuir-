import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, Redirect } from "react-router-dom";
import { getProfile, login } from "../JS/actions";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Header from "./Header";
import SignUp from "./SignUp";
import '../login.css'
import Footer from "./Footer";
function Login(props) {
  const errors = useSelector((state) => state.userReducer.errors);
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getProfile())
   console.log('isAuth', isAuth)
  }, [])
 
  
  const signIn = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return ( 
    <>
    {
      isAuth ? < Redirect to="/"/> : ( 
        <div className="looo">
        {" "}
     
       <Header/>
      
      
       <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> 
        <section>
      
        
        <div className="box">
      
          <div className="form">
            {" "}
            <h1>Sign in</h1>{" "}
     
          <form>
            <div className="inputBx">
          
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
           < PersonIcon  className="imgg" />
            {errors ? (
              errors.msg ===
              "sorry , we couldn't find an account with that E-mail" ? (
                <span>{errors.msg}</span>
              ) : null
            ) : null}
            </div>
            <div className="inputBx">
           
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
            />
             <a href="" className="forgot_password">Forgot your password ?</a>
            <LockIcon className="imgg" />
            {errors ? (
              errors.msg === "sorry , that password isn't right " ? (
                <span className="errors">{errors.msg}</span>
              ) : null
            ) : null}
            </div>
         
            <div className="inputBx">
            <input className="sign_in_button" type="submit" value=" Sign In" onClick={signIn} />
        
            </div>           </form>  
   
           
      
  
          <div>
          <div className="log">
           <div className="sign">
         <p className="customer"> New Customer? </p> 
            <Link to="/SignUp">
              {" "}
           <p> <a href="" className="signUp">Sign-up</a></p>
             
              </Link>
              </div>
             
              </div>
           
           
          </div>
          </div>
        </div>
        
        </section>
        </div>
      )
    }
</>

  );
}

export default Login;
