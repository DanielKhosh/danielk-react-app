import React from 'react';
import styles from './orderstatus.module.css'
import { Link } from "react-router-dom";

function Orderstatus (eta){

    return(
        <div className={styles.order_container}> 
            <p>ordernummer #{Math.random()*1000000000000000000}</p>
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