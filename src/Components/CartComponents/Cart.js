import React, { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import CartWithProduct from './CartWithProduct';
import { useParams } from 'react-router';
import Productdata from '../../data/productData'

function Cart() {

const params=useParams();

const [productData,setProductData]=useState(Productdata)
const singleProduct=productData.filter((elem)=>elem.id==params.ProductId)

const [cartProduct,setCartProduct]=useState(singleProduct);

let pastData=sessionStorage.getItem('CartProductKey')

if(pastData==null){
  JSON.parse(pastData)
 pastData=[]
}

else{
pastData=JSON.parse(sessionStorage.CartProductKey)
}

useEffect(()=>{
  setCartProduct(cartProduct.concat(pastData))
 
},[])


            if(cartProduct.length <= 0)
            {
                return (
                  <EmptyCart/>
                )   
            }
    
            else
            {
                return (
                    <CartWithProduct props={cartProduct} />
                )
            }    
}

export default Cart;