import React from 'react';
import '../../Styles/CartStyles/CartButtonStyles.css'


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
        <div id='count-container'>
        <button onClick={incHandler} className='count-button'>+</button>
        <p className='count-value'>{count}</p>
        <button onClick={decHandler} className='count-button'>-</button>
       
        </div>
     );
}

export default ProductCounter;