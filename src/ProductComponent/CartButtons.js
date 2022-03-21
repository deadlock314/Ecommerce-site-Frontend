import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { updateCartData, updatePrice } from '../ReduxCode/Reducers';
import { priceAdder } from '../HelperFun/priceAdder';
import { setStorage } from '../HelperFun/browserStorageFuns';

function CartButtons({prop}) {

    const redirect=useNavigate();
    const cartData=useSelector(state=> state.cartData);

    const dispatch=useDispatch();


    const AddToCartHandler=(e)=>{

    

 const checkForDuplicate=()=>{
         for (let i = 0; i < cartData.prevCartData.length; i++)
           if(cartData.prevCartData[i].productId==prop.productId){
           return false;
           } 
          return true;
    }
    if(checkForDuplicate)
    {
        dispatch(updateCartData(prop));
        dispatch(updatePrice({ totalPrice:priceAdder(cartData.totalPrice,prop.price,'add') ,countObj:{id:prop._id,count:1}}))
    }

redirect(`/cart`);
} 

    
    const BuyNowHandlerWithSingleP=(e)=>{
        redirect(`/buyingpage/${e.target.name}`)
    }

    return (  
        <div id='pinfo-btn'>
        <button className='productInfo-button' name={prop.productId} onClick={BuyNowHandlerWithSingleP} >Buy Now</button>
        <button className='productInfo-button' name={prop.productId} onClick={AddToCartHandler}>Add to Cart</button>
        </div>
    );
}

export default CartButtons;