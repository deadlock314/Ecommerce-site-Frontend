import React from 'react';

function CartCalculator(prop) {
console.log(prop)

    return ( 
    <>
    <p>AmountOfProduct {prop.props.price}</p>
    
    
    </> );
}

export default CartCalculator;