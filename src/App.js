import React,  {useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Order from './components/Order';
import Home from './components/Home';
import * as yup from 'yup';
import schema from './validation/formSchema'; //

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
  const validate = (name,value) => {
    yup.reach(schema,name).validate(value)
      .then(()=> setFormErrors({...formErrors,[name]:''}))
      .catch(err => setFormErrors({...formErrors,[name]: err.errors[0] }))
  }

  const doChange = (name,value) => {
    validate(name,value);
    setOrderData({...orderData,[name]:value})

  }

  return (
    <div className='App'>
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
        {orders.map(order=>{
          <div key={order.id}>
            <p>{order.name}, thank you for ordering!</p>
            <h4>Your order::</h4>
            <p>{order.size} with {(order.pepperoni ? 'pepperoni' : '')}</p>
            <p>{order.olives ? 'olives' : ''}</p>
            <p>{order.mushrooms ? 'mushrooms' : ''}</p>
            <p>{order.pineapple ? 'pineapple' : 'no toppings'}</p>

            <p>{order.special ? `${order.special}` : ''}</p>
          </div>
        })}
      </Route>

      </Router>
    </div>
  );
};
export default App;
