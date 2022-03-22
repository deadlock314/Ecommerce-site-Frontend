import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PriceCalc=()=> {
    const redirect=useNavigate();
    const totalPrice=useSelector((state)=>state.cartData.totalPrice);
    return (
        <>
       <br/>
       <hr/>
            <div id='calc'>    
            <p className='calc-value'>Total Amount ₹{totalPrice}</p>
            <button id='buypage-btn' onClick={()=>redirect('/buyingpage/morethanonep')}>Buy Now</button>
          </div>
        </>
      );
}

export default PriceCalc;