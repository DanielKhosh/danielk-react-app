import React from 'react';
import styles from './orderstatus.module.css'
import { Link } from "react-router-dom";

function Orderstatus (){
    return(
        <div className={styles.order_container}> 
            <p>ordernummer #12DV23F</p>
            <img src="./img/Group 5.png"></img>
            <h1>Din beställning är på väg!</h1>
            <h3>15 månader</h3>
            <Link to="/" >
                <h2>RIP, Life!</h2>
                
            </Link>
        </div>
    )
}


export default Orderstatus;