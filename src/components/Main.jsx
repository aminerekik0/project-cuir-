import React, { useEffect } from "react";
import Cards from "./Cards";
import Carrousel from "./Carrousel";

function Main(props) {
  const {cartItems} = props; 
  return (
   
    <div className="main">
       <Carrousel /> 
      <Cards   />
    </div>
  );
}

export default Main;
