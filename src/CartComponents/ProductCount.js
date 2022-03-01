import React from 'react';
import '../Styles/CartStyles/CartButtonStyles.css';
import {priceAdder} from '../HelperFun/priceAdder';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice } from '../ReduxCode/Reducers';

const ProductCounter=({props})=>{

    let count= useSelector(state=> state.cartData.countObj[props._id]) || 1;
    const prevPrice=useSelector(state=>state.cartData.totalPrice)
    const dispatch=useDispatch(); 

    const incHandler=()=>dispatch(updatePrice({ 
        countObj:{id:props._id,count:count+1},
        totalPrice:priceAdder(prevPrice,props.price,'add')
    }))

    const decHandler=()=>{    
        if(count < 2 ) count=1

        if(count >1)
        dispatch(updatePrice({ 
        countObj:{id:props._id,count:count-1},
        totalPrice:priceAdder(prevPrice,props.price,'sub')
        }))
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