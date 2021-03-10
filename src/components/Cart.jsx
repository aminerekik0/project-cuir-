import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import { withRouter } from "react-router";
import Subtotal from "./Subtotal";
import axios from "axios";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../JS/actions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "3px",
      display: "flex",
      justifyCcontent: "spaceCbetween",
      width: "10vh",
    },
  },
}));

function Carts(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productReducer.cartItems);
  const [cartProducts, setCartProducts] = useState([]);
  const [qty, setQty] = useState(0)
  useEffect(() => {
    if (localStorage.getItem("Cart")) {
      setCartProducts(JSON.parse(localStorage.getItem("Cart")));
    }
  }, [qty]);

  const reduceQTY = (product) => {
    if (product.qty > 1) {
      cartProducts.map((el) => {
        if (el._id === product._id) {
          el.qty = el.qty - 1;
          setQty(el.qty)
        }
      });
      localStorage.setItem('Cart',JSON.stringify(cartProducts) )
    }
    console.log('cartProducts', cartProducts)
  };

  const addQTY = (product) => { 
    let array = []
    cartProducts.map((el) => {
      if (el._id === product._id) {
        el.qty = el.qty + 1;
        setQty(el.qty)
      }
    });
    localStorage.setItem('Cart',JSON.stringify(cartProducts) )
    console.log('cartProducts', cartProducts)
  };

  // useEffect(() => {
  //   dispatch(getCartItems())
  // }, []);

  return (
    <div>
      <Header />
      {}
      <div className="shopp">
        <h2>SHOPPING CART </h2>{" "}
      </div>
      <div className="carts">
        <div>
          {cartProducts.length > 0
            ? cartProducts.map((el) => (
                <div key={el._id} className="cart">
                  <img src={el.image} alt="" />
                  <div className="description">
                    <div className="remove_button">
                      <HighlightOffIcon
                        //  onClick={() => onRemove(el)}
                        style={{ cursor: "pointer" }}
                      /> 
                    </div>
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                    <p>{el.price * el.qty} TND</p>
                    <div className="qty">
                      <p>Quantity: {el.qty} </p>
                      <div className={classes.root}>
                        {/* <input min="1" value={inputValue} type="number" />  */}
                        <Button
                          variant="outlined"
                          onClick={() => reduceQTY(el)}
                          color="default"
                        >
                          -
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => addQTY(el)}
                          color="default"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div> <Subtotal  cartProducts={cartProducts} />  </div>
                </div>
                
              ))
            :
   <div className="cart_empty" >  
     
    <h4>
    There are no items in your cart. 
      </h4> 
  
      <button type="button" className="cart_button" >Continue Shopping</button>

     </div>            
            
            

}
        </div>
       
      </div>
    </div>
  );
}

export default withRouter(Carts);
