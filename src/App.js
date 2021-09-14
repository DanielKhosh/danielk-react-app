import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import { connect } from "react-redux";

import Products from "./components/products/Products";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/navigation"
import Orderstatus from "./components/Orderstatus/Orderstatus";
import Ourcoffe from "./components/Ourcoffe/Ourcoffe";

import "./App.css";

function App({ current }) {
  return (
   <Router>
      <div className="app">
        <Switch>
          <Route exact path="/navigation" component={Navigation}  />
          <Route exact path="/ourcoffe" component={Ourcoffe}  /> 
          <Route exact path="/orderstatus" component={Orderstatus}  /> 
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);