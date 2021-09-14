import React from "react";
import { Link } from "react-router-dom";
import styles from './navigation-css.module.css';


const Navigation = () => {

  return (

    <div className={styles.navigation_background}>
      <div className={styles.links}>
        <Link to="/"><h1>Meny</h1></Link>
        <Link to="/ourcoffe"><h1>vår kaffe</h1></Link>
      </div>
    </div>
  );
};


export default Navigation;