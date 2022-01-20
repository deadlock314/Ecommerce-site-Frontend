import React, { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import CartWithProduct from './CartWithProduct';
import { useParams } from 'react-router';
import Productdata from '../../data/productData'
import PastDataFun from '../../HelperFun/PastDataFun';
function Cart() {

const params=useParams();
//sessionStorage.setItem('Count',1)
const [productData,setProductData]=useState(Productdata)
const singleProduct=productData.filter((elem)=>elem.id==params.ProductId)
const [cartProduct,setCartProduct]=useState(singleProduct);

let pastData=sessionStorage.getItem('CartProductKey');

let pastdata=[];
let pastNormData=[];



if(pastData==null){
 pastdata=[]
 
}

else{
pastNormData=JSON.parse(pastData)
//problem
pastdata=PastDataFun(pastNormData) 

}

useEffect(()=>{
  setCartProduct(PastDataFun(cartProduct.concat(pastdata)))
 
},[])
console.log(cartProduct,'cartProduct')



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