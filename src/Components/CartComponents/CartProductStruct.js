import React from 'react';
import '../../Styles/CartStyles/CartPS.css'
import CartProductContext from '../../HelperFun/Context';

function CartProductStruct(prop) {
    
    console.warn(React.useContext(CartProductContext))
    const CartDelClickHandler=(e)=>{
        console.log(e.target.name);

    }
    return ( 
       
        <>
        <div className="cart-product-struct" key={prop.props.productId} >
            <img id='cart-product-image' src={prop.props.imgLink} name={prop.props.productId} alt={prop.props.name}/>
            <div id='cart-container'>
            <p id='cart-product-des'>   {prop.props.des}</p>
            <p id="cart-product-price"> {prop.props.price}</p>
            <button id='cart-product-btn' name={prop.props.productId} onClick={CartDelClickHandler}>Delete</button>
            </div>
               
                   
        </div>
       
        </>
     );
}

export default CartProductStruct;