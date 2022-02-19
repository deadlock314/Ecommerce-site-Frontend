import React, { useContext } from 'react';
import { ContextArr } from '../HelperFun/Context';
import '../Styles/CartStyles/CartButtonStyles.css';
import {priceAdder} from '../HelperFun/priceAdder';

function ProductCounter(prop) {

    const Contextarr=useContext(ContextArr);
    const id=prop.props._id,productPrice=prop.props.price;  
    const [count,setCount]=React.useState(Contextarr[0].countObj[id]);
    
        const incHandler=()=>{
            setCount((prevCount)=>prevCount+1);
            Contextarr[1]({...Contextarr[0],countObj:{[id]:count},priceObj:priceAdder(Contextarr[0].priceObj,productPrice,'add',1)})
        }

        const decHandler=()=>{    
        if(count < 2 )
            setCount(1);
        else
            setCount((prevCount)=>prevCount-1);
        
        Contextarr[1]({...Contextarr[0],countObj:{[id]:count},priceObj:priceAdder(Contextarr[0].priceObj,productPrice,'sub',1)})
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