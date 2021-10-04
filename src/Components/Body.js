import React, { useEffect, useState } from 'react';
import Band from './Band';
import './Body.css'
import Cart from './Cart';
const Body = () => {
    const [band, setBand] =useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./bands.json')
        .then(res=>res.json())
        .then(data=>setBand(data))
    },[])

    const handleClick=(name)=>{
        const exists=cart.find(item=> item.name===name);
        if(exists){
        }
        else{
            const c=[...cart];
            const item=band.find(p=>p.name===name);
            c.push(item);
            setCart(c);
        }
    }

    const handleCross= (name)=>{
        const exists=cart.find(item=>item.name===name);
        //if doesnt exist, then nothing would be done
        if(!exists){

        }
        else{
            const newCart=cart.filter(item=>item.name!==name);
            setCart(newCart);
        }
    }
    return (
        <div className="full-body">
            <div className="product-display">
                {band.map(bnd=><Band key={bnd.name} item={bnd} handleClick={()=>handleClick(bnd.name)}></Band>)}
            </div>
            <div className="cart-display">
                <Cart cart={cart} handleCross={handleCross}></Cart>
            </div>
        </div>
    );
};

export default Body;

