import React from 'react';
import { useNavigate } from 'react-router';

function CartButtons(props) {
    const redirect=useNavigate()
    const AddToCartHandler=(e)=>{

redirect(`/cart/${e.target.name}`);
} 

    
    const BuyNowHandlerWithSingleP=(e)=>{
        redirect(`/buyingpage/${e.target.name}`)
    }

    return (  
        <>
        <button className='productInfo-button' name={props.prop.id} onClick={BuyNowHandlerWithSingleP} >Buy Now</button>
        <button className='productInfo-button' name={props.prop.id} onClick={AddToCartHandler}>Add to Cart</button>
        </>
    );
}

export default CartButtons;