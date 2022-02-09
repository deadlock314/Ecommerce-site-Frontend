import React from 'react';
import '../Styles/CartStyles/CartPS.css'
import ContextObj from '../HelperFun/Context';

function CartProductStruct(prop) {
    
    

    const CartDelClickHandler=(e)=>{
        // const NJsonprevCartData=JSON.parse(ContextObj.prevCartData);
    //    ContextObj.prevCartData=JSON.stringify(
    //        NJsonprevCartData.filter((doc)=>{
    //        return doc.productId !=e.target.name;
    //    })
    //    )   
    //    console.warn(NJsonprevCartData.filter((doc)=>{
    //     return doc.productId !=e.target.name;}))
    console.warn(ContextObj ,';')

    }
    return ( 
       
        <>
   
            < div className="cart-product-struct" key={prop.props.productId} >
               <img id='cart-product-image' src={prop.props.imgLink} name={prop.props.productId} alt={prop.props.name}/>
               <div id='cart-container'>
               <p id='cart-product-des'>   {prop.props.des}</p>
               <p id="cart-product-price"> {prop.props.price}</p>
               <button id='cart-del-btn' name={prop.props.productId} onClick={CartDelClickHandler}>Delete</button>
            </div>
              </div>
      
        
        </>
     );
}

export default CartProductStruct;