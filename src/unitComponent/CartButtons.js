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
        <div id='pinfo-btn'>
        <button className='productInfo-button' name={props.prop.productId} onClick={BuyNowHandlerWithSingleP} >Buy Now</button>
        <button className='productInfo-button' name={props.prop.productId} onClick={AddToCartHandler}>Add to Cart</button>
        </div>
    );
}

export default CartButtons;