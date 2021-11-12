import React from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//import Home from './components/Home';
import Order from './components/Order';


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
