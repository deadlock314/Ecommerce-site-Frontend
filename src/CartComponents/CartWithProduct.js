import React, { useContext, useEffect, useState } from 'react';
import CartProductStruct from './CartProductStruct';
import ProductCounter from './ProductCount';
import '../Styles/CartStyles/CartPS.css';
import { useNavigate } from 'react-router';
import {ContextArr} from '../HelperFun/Context';
import { priceAdder } from '../HelperFun/priceAdder';

function CartWithProduct(prop) {
  
const redirect=useNavigate();
const Contextarr=useContext(ContextArr);
const [cartState ,setCartState]= useState(Contextarr[0].prevCartData);

const CartDelClickHandler=(e)=>{
  e.preventDefault();
  Contextarr[1]({...Contextarr[0],  prevCartData:Contextarr[0].prevCartData.filter((el=> el._id != e.target.name))
   , priceObj:priceAdder( Contextarr[0].priceObj,e.target.className,'sub',Contextarr[0].countObj[e.target.name]+(Contextarr[0].countObj[e.target.name]==1?0:1) ) 
});
};



useEffect(()=>{
 setCartState(Contextarr[0].prevCartData); 
},[Contextarr[0].prevCartData])

    return ( 
      <>
       {
          cartState.map(( cartProduct )=>{
            return(
              <div key={cartProduct._id}>
              { <div id='main-cart-component'>
                  <CartProductStruct props={cartProduct}  />
                  <ProductCounter props={cartProduct}/>
                  <button id='cart-del-btn' className={cartProduct.price} name={cartProduct._id} onClick={CartDelClickHandler}>Delete</button>
               </div>
                                
              }
              </div>
        ); 
        })
       }
       <br/>
       <hr/>

          <div id='calc'>    
     
            <p className='calc-value'>Total Amount  ₹{Contextarr[0].priceObj}</p>
            <button id='buypage-btn' onClick={()=>redirect('/buyingpage/morethanonep')}>Buy Now</button>
            
          </div> 

        </>
        );
}

export default CartWithProduct;