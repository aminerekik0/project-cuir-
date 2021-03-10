import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "bootstrap/dist/css/bootstrap.min.css";

function Subtotal(props) {
    const {  cartProducts }=props; 
    const getTotal = (cartProducts)=>
    cartProducts?.reduce((amount,item) => item.price*item.qty + amount ,0); 
 

    const getQty = (cartProducts)=>
    cartProducts?.reduce((amount,item) => item.qty + amount ,0); 
     
 
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundCcolor: "#E8AF5A",
      borderCradius: "2px",
    width: "100%",
    height: "30px",
    },
  },
}));

 
    
  return (
    <div className="subtotal">
  
      <CurrencyFormat
        renderText={(value) => (
           
          <>
             <div>{cartProducts.length === 0 && <div>Cart Is Empty</div>} </div> 
            <p> 
              Subtotal ({getQty(cartProducts)}.items): 
              
              <strong>
           {value}
                </strong>
            </p>
           
          </>
                )}
         decimalScale={2}
         value={getTotal(cartProducts)}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"$"}
         
         
      />
      <button type="button" class="btn btn-dark">checkout</button>
      
    </div>
  );
}

export default Subtotal;
