import React from 'react';
import '../Styles/CartStyles/CartPS.css';


function CartProductStruct(prop) {
 
    return ( 
       
        <>
   
            < div className="cart-product-struct" key={prop.props._id}>
               <img id='cart-product-image' src={prop.props.imgLink} name={prop.props.productId} alt={prop.props.name}/>
               <div id='cart-container'>
               <p id='cart-product-des'>   {prop.props.des}</p>
               <p id="cart-product-price"> {prop.props.price}</p>
               </div>
            </div>
      
        
        </>
     );
}

export default CartProductStruct;