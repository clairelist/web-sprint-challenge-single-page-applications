import React,  {useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Order from './components/Order';
import Home from './components/Home';

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

const initFormErrors = {
  name:''
}

const App = () => {

  //DATA AKA STATE SECTION

  const [orderData,setOrderData] = useState(initOrderData);
  const [formErrors,setFormErrors] = useState(initFormErrors);
  const [orders,setOrders] = useState([]); 

  //LOGIC SECTIONR
  //needful: a doChange and a doSubmit func

  const doSubmit = () => {
      //AXIOS! (Sounds like a dang harry potter spell lol)
    axios.post('https://reqres.in/api/orders',orderData)
      .then(res=>{
       setOrders([res.data, ...orders])
      }).catch(err=>{
        console.error(err);
      })
      .finally(()=>{setOrderData(initOrderData)})
  }

  //needful: validate function !

  const doChange = (name,value) => {
    //add 'validate' callback here
    setOrderData({...orderData,[name]:value})

  }

  return (
    <>
      <h1>Lambda Eats</h1>
      

      <Router>
          <nav className='navbar'>
            <Link id='order-pizza' to='/pizza'>ORDER a PIE !</Link>
            <Link to='/'>Take me HOME!</Link>
          </nav>
      {/*ROUTE STUFF HERE*/}
      <Route exact path='/' component={Home}/>
      <Route path='/pizza'>
        <Order 
        values={orderData}
        change={doChange}
        submit={doSubmit}
        errors={formErrors}
        />
      </Route>

      </Router>
    </>
  );
};
export default App;
