import React, { useContext, useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import CartWithProduct from './CartWithProduct';
import { useParams } from 'react-router'; 
import getProductData from '../../HelperFun/getProductData';


function Cart() {

const param=useParams();

const [cartProduct,setCartProduct]=useState();
const [loading ,setLoading]=useState(true);


useEffect(()=>
{
     const FetchData=async()=>{
    const res= await getProductData(param)
    setCartProduct([res])
    setLoading(false)

}
   FetchData();

},[]);





                return (
                  <>
                  {
                     loading ?  <> </>  : cartProduct.length <=0 ? <EmptyCart/>: <CartWithProduct props={cartProduct} />
                  }
                  </>
                  )


}
export default Cart;