import React from 'react';
import { useNavigate } from 'react-router';


function CartProductStruct(prop) {
     const redirect=useNavigate();  
    const ProductInfoFetch=(e)=>{
            
           redirect(`/ProductInfo/${e.target.name}`)
          
          }
    return ( 
        <>
        <div className="cart-product-struct" onClick={ProductInfoFetch} key={prop.props.id}>
                <img id='cart-product-image' src={prop.props.imgLink}  name={prop.props.id} alt={prop.props.name}/>
                <p id='cart-product-des'> {prop.props.des}</p>
                <p id="cart-product-price"> {prop.props.price}</p>   
            </div>
        </>
     );
}

export default CartProductStruct;