import React, { useEffect , useState } from 'react';
import EmptyCart from './EmptyCart';
import CartWithProduct from './CartWithProduct';
import Spinner from '../unitComponent/Spinner';
import { useParams } from 'react-router'; 
import {getProductListData} from '../HelperFun/getProductData';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartData, updatePrice } from '../ReduxCode/Reducers';
import { priceAdder } from '../HelperFun/priceAdder';

const Cart=()=> {

const param=useParams();
let loading=false;
const cartData=useSelector(state=> state.cartData);
if(param.ProductId)
{
     
     const ProductType= param.ProductType || useSelector((state)=>state.productType.value);
     const dispatch=useDispatch();
     let [loading ,setLoading]=useState(false);
     const checkForDuplicate=()=>{
         for (let i = 0; i < cartData.prevCartData.length; i++)
           if(cartData.prevCartData[i].productId==param.ProductId){
           setLoading(false);
           return false;
           } 
          return true;
    }

   useEffect(()=>{
      (async()=>{
         try{
            if(param.ProductId && checkForDuplicate()){
            const res= await getProductListData(`https://ecommerce-app-api-1.herokuapp.com/singleproduct/${ProductType}/${param.ProductId}`)  
            dispatch(updateCartData(res));
            dispatch(updatePrice({ totalPrice:priceAdder(cartData.totalPrice,res.price,'add') ,countObj:{id:res._id,count:1}}))
            setLoading(false) ;
         }
      }
      catch(err){
         console.warn(err);
         setLoading(false)
      }    
      })();
   },[param.ProductId]); 
}
else{
    loading=false;
}
    

   return (
   <>
      {
      (param.ProductId==undefined && cartData.prevCartData.length<=0 )?<EmptyCart/> : loading ? <Spinner/>  : <CartWithProduct />
      }
   </>
   )
}
export default Cart;


