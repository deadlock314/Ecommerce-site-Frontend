import React from 'react';
import { useNavigate } from 'react-router';

function CartButtons(props) {
    console.log(props)
    const redirect=useNavigate()
    const AddToCartHandler=(e)=>{
     
        redirect(`/cart/${e.target.name}`)

    }
    const BuyNowHandler=(e)=>{
        redirect(`/buyingpage/${e.target.name}`)
    }

    return (  
        <>
        <button className='productInfo-button' name={props.prop} onClick={BuyNowHandler} >Buy Now</button>
        <button className='productInfo-button' name={props.prop} onClick={AddToCartHandler}>Add to Cart</button>
        </>
    );
}

export default CartButtons;