import React from 'react';
import { useNavigate } from 'react-router';

function CartButtons(props) {
    const redirect=useNavigate()
    const AddToCartHandler=(e)=>{


let pastData=sessionStorage.getItem('CartProductKey');
let pastdata=[];
let pastNormData=[];


let z=false;
if(pastData==null){

  redirect(`/cart/${e.target.name}`);
 
}

else{
pastNormData=JSON.parse(pastData);

z=pastNormData.map((x)=>{
    if(x.id==e.target.name)
    return true;
})
if(z)
redirect(`/cart`);
else
redirect(`/cart/${e.target.name}`);
} 

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