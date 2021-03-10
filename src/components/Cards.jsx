import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllProducts } from "../JS/actions";
import { Backdrop, CircularProgress } from "@material-ui/core";

function Cards() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div className="cards">
        {loading ? (
          <Backdrop open>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : products ? (
          products.map((product) => (
            <div key={product._id} className="card">
              <div className="card_img">
                <img src={product.image} />
              </div>
              <div className="card_header">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>

              
              <div className="price_add">
                <div>
                  {" "}
                  <p className="price">
                    {product.price} <span>TND</span>
                  </p>
                </div>

                <div className="add_to_cart">
                  <ShoppingCartIcon
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                    className="i_shopp"
                  />
                </div>
              </div>{" "}
              {/* <div className="btn"  onClick={() => {
                      dispatch(addToCart(product._id));
                    }}>
                <p><ShoppingCartIcon/></p> 
                     <span>Add to cart</span>
                   </div> */}
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Cards);
