//App.js
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Navbar from './Navbar';
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


 const promise = loadStripe('pk_test_51KKlZgSA1PcZ4HWhXT8fCEBA3F8I0oHTHdEJxuU4IZ9lXYYVBqrGlmm934nMoPBaildjI5celkKp2BNyR2HP9Jt500g6u5qtST');


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component is loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log('THE USER IS :', authUser);
        if (authUser) {
          //user just logged in / user was logged in
          dispatch(
            {
              type: 'SET_USER',
              user: authUser
            }
          )
        }
        else {
          //user logged out
          dispatch(
            {
              type: 'SET_USER',
              user: null
            }
          )
        }
      })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/Orders">
        <Header />
          <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;