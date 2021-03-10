import React,{useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
function HomePage(props) {
  
  const {cartItems} =props 
  return (
    <div>
      <Header cartItems={cartItems} />
      <Main   />
      <Footer/>
    </div>
  );
}

export default HomePage;
