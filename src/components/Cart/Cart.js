import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import CartItem from "./CartItem/CartItem";
import styles from './cart.module.css';


const Cart = ({ cart }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      
      items += item.qty;
      price += item.qty * item.price;

    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.main_container}>
      <Navbar/>
      <h1>din beställning</h1>
      <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      </div>

      <div className={styles.shop_container}>
        <div>
          <span> <h2>TOTAL.............{totalPrice} KR </h2></span>
        </div>
        <Link to="orderstatus" style={{ textDecoration: 'none' }}>
          <h1>Take my money!</h1>
        </Link>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
