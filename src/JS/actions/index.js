import axios from "axios";
import {
  ADD_CART_ITEM,
  ADD_TO_CART,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_CART_ITEMS,
  GET_CART_ITEMS_FAIL,
  GET_CART_ITEMS_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  REMOVE_FROM_CART,
} from "../constants/action-types";
import cartReducer from "../reducers/userReducer";

export const getAllProducts = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_PRODUCT,
  });
  try {
    const response = await axios.get("/products/allproducts");
    console.log(response);
    dispatch({
      type: GET_ALL_PRODUCT_SUCCESS,
      payload: response.data.products,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCT_FAIL,
      payload: error,
    });
  }
};

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const { data } = await axios.post("/user/register", newUser);
    localStorage.setItem("token", data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error ,
    });
  }
};

export const login = (cred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post("user/login", cred);
    localStorage.setItem("token", loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error ,
    });
  }
};
export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get("/user/current", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error ,
    });
  }
};

export const addToCart = (product) => (dispatch) => {
  let cart = [];
  if (localStorage.getItem("Cart")) {
    cart = JSON.parse(localStorage.getItem("Cart"));
    const exist = cart.findIndex(el=>el._id===product._id)
    console.log('exist', exist)
    if (exist===-1) {
      localStorage.setItem("Cart", JSON.stringify([...cart, product]));
    }
  } else {
    localStorage.setItem("Cart", JSON.stringify([...cart, product]));
  }
  dispatch({
    type: ADD_CART_ITEM,
    payload: cart.length
  });
};

export const getCartItems = () => async (dispatch) =>{
  dispatch({
    type: GET_CART_ITEMS,
  });
  try {
    const productIDs = JSON.parse(localStorage.getItem("Cart"));
    const res = await axios.post("products/cartItems", {productIDs});
    console.log('res', res)
    dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_ITEMS_FAIL,
      payload: error,
    });
  }
}
