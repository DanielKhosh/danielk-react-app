import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./navbar.module.css"
import background from "../../background-img/header.png";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.nav_container} style={{backgroundImage:`url(${background})`}} >
      <Link to="/navigation">
        <div>
          <img src="./img/navigation.png" className={styles.img_nav}></img>
        </div>
      </Link>

      <Link to="/cart">
        <div>
          <img src="./img/shopping-bag.jpg" className={styles.img_cart}></img>
        </div>

      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {

  return {cart: state.shop.cart,};
};

export default connect(mapStateToProps)(Navbar);
