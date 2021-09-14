import React from "react";
import styles from "./product.module.css"
import { connect } from "react-redux";
import {
  addToCart,
} from "../../../redux/shopping/actions";

const Product = ({ product, addToCart }) => {
  return (
    <div className={styles.item_container}>

      <div className={styles.item_button}>
          <img className={styles.add_button} src="./img/add.png" onClick={() => addToCart(product.id)}></img>
      </div>

      <div className={styles.item_info}>
        <h3 className={styles.item_sort}>{product.sort}</h3>
        <p className={styles.item_days}>{product.days}</p>
      </div>

      <h3 className={styles.item_price}> {product.price}kr</h3>
      
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
