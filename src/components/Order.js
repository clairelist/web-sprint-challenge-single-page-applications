import React from 'react';

const Order = (props) => {

    //'DATA' section
    const {name,size,pepperoni,olives,mushrooms,pineapple,special} = props.values; //since change func is on plain 'value'

    const {submit,change,errors} = props;

    //STATE goeth here

    //build change functionality

    const handleChange=(event)=>{
        const {name,value,checked,type} = event.target;
       const checkVal = type === 'checkbox' ? checked : value;
       change(name,checkVal);
    }

    const handleSubmit=(event)=>{
        event.preventDefault(); //must prevent page from reloading as is 'default behaviour'
        submit();
    }
//NOTE:: BUILD YUP VALIDATION BEFORE USING ERRORS, HERE
    return (
        <div>
            <h2>ORDER your PIE.</h2>
            <p>{errors.name}</p> 

            <form  id='pizza-form' onSubmit={handleSubmit}>
                <lable>Name:
                    <input 
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    id='name-input'
                    />
                </lable>

                <lable>Size:
                    <select id='size-dropdown'>
                  
                    value={size}
                    onChange={handleChange}
                       
                    <option value="">-- CHOOSE your SIZE --</option>
                    <option value='10inch'>10 INCHES</option>
                    <option value='12inch'>12 INCHES</option>
                    <option value='16inch'>16 INCHES</option>
                    </select>
                </lable>
                    <h3>CHOOSE your TOPPINGS.</h3>
                <lable>PEPPERONI:
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    checked={pepperoni}
                    onChange={handleChange}
                    />
                </lable>

                <lable>OLIVES:
                    <input 
                    type='checkbox'
                    name='olives'
                    checked={olives}
                    onChange={handleChange}
                    />
                </lable>

                <lable>MUSHROOMS:
                    <input 
                    type='checkbox'
                    name='mushrooms'
                    checked={mushrooms}
                    onChange={handleChange}
                    />
                </lable>

                <lable>PINEAPPLE:
                    <input 
                    type='checkbox'
                    name='pineapple'
                    checked={pineapple}
                    onChange={handleChange}
                    />
                </lable>

                <lable>SPECIAL instructions::
                    <input 
                    type='text'
                    name='special'
                    value={special}
                    onChange={handleChange}
                    id='special-text'
                    />
                </lable>
                <input type='submit' id='order-button' value='ORDER your PIE.' />
            </form>
        </div>
    )
}

export default Order;