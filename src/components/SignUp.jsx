import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { register } from "../JS/actions/index";

function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const errors = useSelector((state) => state.userReducer.errors);
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
        phoneNumber,
      })
    );
  };
  return (
    <div>
      <Header />
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> 
        <section>
      
        
        <div className="box">
      
          <div className="form">
            {" "}
            <h1>Sign up</h1>{" "}
     
          <form>
            <div className="inputBx">
            <input
          type="text"
          placeholder="Name"
          name="Name"
          onChange={(e) => setName(e.target.value)}
        />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
            
           
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
            />
                 <input
          
          placeholder="Phone Number"
          name="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      
      </div>
      <div className="inputBx">
      <input className="sign_in_button" type="submit" value=" sign up" onClick={addUser} />
         </div>
        
        
              </form>  
   
           
      
  
      
          </div>
        </div>
        
        </section>
      {/* <div className="sign_up">
        <h1>New Account </h1>{" "}
      </div>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <h5>E-mail</h5>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors ? <span>{errors.msg}</span> : null}

        <input
          type="password"
          placeholder="Enter passwort"
          name="email"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div>
          {" "}
          <button className="sign_up_button" type="submit" onClick={addUser}>
            Submit
          </button>
        </div>
      </form> */}
    </div>
  );
}
export default SignUp;
