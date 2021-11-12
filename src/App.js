import React,  {useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Order from './components/Order';

// import * as yup from 'yup';
// import schema from './formSchema'; //--to build out!
import axios from 'axios';

const initOrderData= {
    name: '',
    size: '', //DROPDOWN

    pepperoni: 0, //NOT INTS!
    olives: 0,
    mushrooms: 0,
    pineapple: 0,

    special: ''
}

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>ORDER NOW! CONSUME ! CONSUME ! CONSUME !</p>

      <Router>
          <nav className='navbar'>
            <Link id='order-pizza' to='/pizza'>ORDER a PIE !</Link>
            <Link to='/'>Take me HOME!</Link>
          </nav>
      {/*ROUTE STUFF HERE*/}
      {/* <Route exact path='/' component={Home}/> */}
      <Route path='/pizza' component={Order}/>

      </Router>
    </>
  );
};
export default App;
