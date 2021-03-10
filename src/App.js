import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Cards from "./components/Cards";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";
import OurStory from "./components/OurStory";

function App() {
  //const addToCart = (product) =>{
  //console.log('products', product)
  //const exist = cartItems.find(x=> x._id === product._id);
  //if (!exist) {
  //setCartItems([...cartItems, product])
  //}

  //console.log('cartItems', cartItems)
  //};

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route path="/ourStory">
          <OurStory />
        </Route>
      </div>
    </Router>
  );
}

export default App;
