import React from 'react';



function ProductCounter(prop,fun) {
    
    
    const [count,setCount]=React.useState(1);
       


       const incHandler=()=>{
           
                setCount((prevCount)=>prevCount+1)

                
                prop.fun({count:count+1,price:prop.props.priceInt,discount:prop.props.discountInt,totalAmount:prop.props.priceInt-prop.props.discountInt,mode:1});
            
        
    }

    const decHandler=()=>{
        
        if(count < 2 )
    setCount(1);
    else{
         setCount((prevCount)=>prevCount-1)
         prop.fun({count:count-1,price:prop.props.priceInt,discount:prop.props.discountInt,totalAmount:prop.props.priceInt-prop.props.discountInt,mode:-1});
         
}
       
    }
    
  
    
    return ( 
        <>
        <button onClick={incHandler}>+</button>
        <p>{count}</p>
        <button onClick={decHandler}>-</button>
       
        </>
     );
}

export default ProductCounter;