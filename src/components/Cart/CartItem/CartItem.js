import React, { useState } from "react";

import { connect } from "react-redux";
import styles from './cartitem.module.css';

import {
  adjustAmount,
  removeFromCart,
} from "../../../redux/shopping/actions";


const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.name_price_container}>
        <p>{item.sort}</p>
        <p>{item.price} KR</p>
      </div>
      <div className={styles.button_QTY_container}>
        <div>
          <label htmlFor="qty"></label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={() => removeFromCart(item.id)}>
          <img className={styles.remove_icon} src="./img/remove-icon.png"></img>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustAmount(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
