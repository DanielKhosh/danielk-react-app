import React from "react";
import { connect } from "react-redux";
import Product from "./Product/Product";
import styles from "./products.module.css";
import Navbar from '../Navbar/Navbar';

const Products = ({ products }) => {
  return (
    <div >
      <Navbar/>
      <h1 className={styles.meny}>Meny</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
