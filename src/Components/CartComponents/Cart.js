import React from 'react';
import EmptyCart from './EmptyCart';
import CartWithProduct from './CartWithProduct';
import { useSelector } from 'react-redux';


const Cart=()=> {

   const cartData=useSelector(state=> state.cartData);
   return (
   <>
      {
      ( cartData.prevCartData.length<=0 )?<EmptyCart/>  : <CartWithProduct />
      }
   </>
   )
}
export default Cart;


