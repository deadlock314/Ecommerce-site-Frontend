import React, { useState } from 'react';
export const ContextArr=React.createContext()

export const GlobalContext=(props)=>{
    const [globalContext,setGlobalContext]=useState(
        {priceObj:'00' ,productType:'',isUserLoggedIn:false,userData:{},prevCartData:[],counObj:{}});
    
    return(
        <ContextArr.Provider value={[globalContext,setGlobalContext]}>
            {props.children}
        </ContextArr.Provider>
    )

}



      