import React from 'react';
import CartProductStruct from './CartProductStruct';
import CartCalculator from './CartCalculator';

function CartWithProduct(prop) {
  window.sessionStorage.setItem('CartProductKey',JSON.stringify(prop.props));
    return ( 
                
        <>
       {
           prop.props.map((cartProduct)=>{
            return(
                <CartProductStruct props={cartProduct}  />
        );
        })
       }
            
        <CartCalculator  props={prop.props}/>
        
        </>
        );
}

export default CartWithProduct;