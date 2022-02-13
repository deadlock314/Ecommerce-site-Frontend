import React, { useState } from 'react';
export const ContextArr=React.createContext()

export const GlobalContext=(props)=>{
    const [globalContext,setGlobalContext]=useState(
        {priceObj:'00' ,productType:'',isUserLoggedIn:false,userData:{}});
    
    return(
        <ContextArr.Provider value={[globalContext,setGlobalContext]}>
            {props.children}
        </ContextArr.Provider>
    )

}

export const CartContextArr=React.createContext()

export const CartContext=(props)=>{
    const [cartContext,setCartContext]=useState({prevCartData:new Set()});    
    return(
        <CartContextArr.Provider value={[cartContext,setCartContext]}>
            {props.children}
        </CartContextArr.Provider>
    )

}

      