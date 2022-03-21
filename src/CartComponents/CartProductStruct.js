import React from 'react';
import { useNavigate } from 'react-router';
import { getStorage } from '../HelperFun/browserStorageFuns';
import '../Styles/CartStyles/CartPS.css';


const CartProductStruct=(prop)=> {
    
    const redirect=useNavigate();

    const clickProductStructHandler=e=>  redirect(`/ProductInfo/${getStorage("productType")}/${prop.props.productId}`)

    return ( 
       
        <div >
   
            <div className="cart-product-struct" key={prop.props._id} onClick={clickProductStructHandler}>
               <img id='cart-product-image' src={prop.props.imgLink} name={prop.props.productId} alt={prop.props.name}/>
               <div id='cart-container'>
               <p id='cart-product-des'>   {prop.props.des}</p>
               <p id="cart-product-price"> {prop.props.price}</p>
               </div>
            </div>
      
        
        </div>
     );
}

export default CartProductStruct;