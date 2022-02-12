import React, { useContext, useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import CartWithProduct from './CartWithProduct';
import { useParams } from 'react-router'; 
import {getProductInfoData} from '../HelperFun/getProductData';
import { CartContext,ContextArr} from '../HelperFun/Context';

function Cart() {

const param=useParams();
const Contextarr=useContext(ContextArr);
const [cartProduct,setCartProduct]=useState();
const [loading ,setLoading]=useState(true);



useEffect(()=>
{
     const FetchData=async()=>{
    const res= await getProductInfoData(param,Contextarr[0].productType)
    setCartProduct([res])
   
    setLoading(false)

}
   FetchData();

},[]);





                return (
                  <CartContext>
                  {
                     loading ?  <> </>  : cartProduct.length <=0 ? <EmptyCart/>: <CartWithProduct props={cartProduct} />
                  }
                  </CartContext>
                  )


}
export default Cart;