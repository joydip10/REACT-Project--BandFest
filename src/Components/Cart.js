import React from 'react';
import './Cart.css'
import Members from './Members';
const Cart = (props) => {
    const length= props.cart.length;
    const booking= props.cart.map(c=>parseFloat(c.booking.substring(1)));
    let total=0.0;
    for(let i=0;i<booking.length;i++){
        total+=parseFloat(booking[i]);
    }
    console.log(total);
    return (
        <div className="cart-design">
            <h1>Music Bands: {length}</h1>
            <h2>Payment: ${total}</h2>
            {(props.cart.length>0) && <h2><u>Added Bands</u></h2>}
            {
                props.cart.map(itm=> <Members key={itm.name} item={itm} handleCross={()=>props.handleCross(itm.name)}></Members>)
            }
            <button className="button">Buy Now</button>
        </div>
    );
};

export default Cart;