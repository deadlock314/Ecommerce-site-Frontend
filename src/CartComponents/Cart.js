import React, { useContext, useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import CartWithProduct from './CartWithProduct';
import { useParams } from 'react-router'; 
import {getProductListData} from '../HelperFun/getProductData';
import {ContextArr} from '../HelperFun/Context';
import {priceAdder} from '../HelperFun/priceAdder';
import Spinner from '../unitComponent/Spinner';

function Cart() {

const param=useParams();

const Contextarr=useContext(ContextArr);
const [cartProduct,setCartProduct]=useState(Contextarr[0].prevCartData);
const [loading ,setLoading]=useState(true);

const checkForDuplicate=()=>{
   for (let i = 0; i < Contextarr[0].prevCartData.length; i++)
      if(Contextarr[0].prevCartData[i].productId==param.ProductId) return false;
      return true;
   }


   useEffect(()=>
{
     const FetchData=async()=>{
      if(param.ProductId && checkForDuplicate()){
          const res= await getProductListData(`https://ecommerce-app-api-1.herokuapp.com/singleproduct/${Contextarr[0].productType}/${param.ProductId}`)
    setCartProduct([res]);
    
    Contextarr[1]({...Contextarr[0],priceObj : priceAdder(Contextarr[0].priceObj,res.price,'add'),
       prevCartData : Contextarr[0].prevCartData.concat([res]) ,
      countObj : { ...Contextarr[0].countObj,[res._id]:1}});
      }
   

    setLoading(false)

}
   FetchData();

},[]);


                return (
                  <>
                  {
                     loading ?  <Spinner/>  : (param.ProductId==undefined && Contextarr[0].prevCartData.length<=0 )?<EmptyCart/> : <CartWithProduct props={cartProduct.price} />
                  }
                  </>
                  )


}
export default Cart;