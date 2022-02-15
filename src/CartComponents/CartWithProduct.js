import React, { useContext, useState } from 'react';
import CartProductStruct from './CartProductStruct';
import ProductCounter from './ProductCount';
import '../Styles/CartStyles/CartPS.css';
import { useNavigate } from 'react-router';
import {ContextArr} from '../HelperFun/Context';

function CartWithProduct(prop) {
  
const redirect=useNavigate();
const Contextarr=useContext(ContextArr);
const [cartState ,setCartState]= useState(Contextarr[0].prevCartData);



    return ( 
      <>
       {
          cartState.map(( cartProduct )=>{
            return(
              <div key={ cartProduct._id}>
              { <>
                  <CartProductStruct props={cartProduct}  />
                  <ProductCounter props={cartProduct}/>
               </>
                                
              }
              </div>
        ); 
        })
       }
       <hr/>

          <div id='calc'>    
     
            <p className='calc-value'>Total Amount  ₹{Contextarr[0].priceObj}</p>
            <button id='buypage-button' onClick={()=>redirect('/buyingpage/morethanonep')}>Buy Now</button>
            
          </div> 

        </>
        );
}

export default CartWithProduct;