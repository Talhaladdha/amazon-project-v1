import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

     <Switch>

       <Route path="/checkout">
      <Header/>
      <Checkout/>
    
      </Route>

      <Route path="/">
      <Header/>
     <Navbar/>
      <Home/>
      </Route>

      </Switch>
      
      </div>
      </Router>
  );
}

export default App;
