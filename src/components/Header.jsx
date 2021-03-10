import React, { useEffect, useState } from "react";
import Logo from "../media/Logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Header(props) {
const [cartLength, setCartLength] = useState(0)
const cartNumber = useSelector(state => state.productReducer.cartNumber)
  useEffect(() => {  
    
    if (JSON.parse(localStorage.getItem("Cart")) ) {
    setCartLength(JSON.parse(localStorage.getItem("Cart")).length) };
  }   , [cartNumber])
  const classes = useStyles();
 
  return ( 
    
  
    <div className="Header_container">              
   

      <div className="header_left">    
        <img  src={Logo} alt="" onClick={()=>props.history.push('/')} />
        <ul>
          <li onClick={()=>props.history.push('/')}>Home</li>
          <li onClick={() => props.history.push("/shop")}>Shop</li>
          <li onClick={() => props.history.push("/aboutUs")}>About Us</li>
          <li onClick={() => props.history.push("/contactUs")}>Contact Us</li>
        </ul>
      </div>

      <div className="header_right">
        <p onClick={() => props.history.push('/login')}>Login</p>
        <div onClick={()=>props.history.push('/cart')}>

        <Badge badgeContent={localStorage.getItem('Cart')?cartLength:0} color="error" >
          <ShoppingCartIcon style={{ color: "white" ,cursor: "pointer"}} />
        </Badge>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
