import React, { useContext, useState } from 'react';
import CartProductStruct from './CartProductStruct';
import ProductCounter from './ProductCount';
import '../../Styles/CartStyles/CartPS.css';
import { useNavigate } from 'react-router';
import CartProductContext from '../../HelperFun/Context';

function CartWithProduct(prop) {

  
  const redirect=useNavigate();

const ContextObj=useContext(CartProductContext);

const [setToArray ,setSetToArray]= useState([]);
const [count,setCount]=React.useState(1);

  const sendDataToCalculator=(cdata)=>{

    setCount(cdata.count)
    ContextObj.priceObj=ContextObj.priceObj+cdata.totalAmount*cdata.mode;
    setPriceObj(priceObj);
  }

  React.useEffect(()=>{
    ContextObj.priceObj=ContextObj.priceObj+prop.props[0].price;
    ContextObj.prevCartData.add(JSON.stringify(prop.props[0]))
    setSetToArray(Array.from(ContextObj.prevCartData))
  },[]) 
  console.warn(ContextObj.prevCartData)
    return ( 
                
        <>
       {
          setToArray.map(( cartProduct )=>{
            return(
              <div key={cartProduct._id}>
              <CartProductStruct props={JSON.parse(cartProduct)}  />
              <ProductCounter props={JSON.parse(cartProduct)} fun={sendDataToCalculator}/>
               
            </div>
        ); 
        })
       }
       <hr/>

          <div id='calc'>    
     
              <p className='calc-value'>Total Amount ₹{ContextObj.priceObj}</p>
              <button id='buypage-button' onClick={()=>redirect('/buyingpage/morethanonep')}>Buy Now</button>
              {/* <SudoComponent props={priceObj} /> */}
    
          </div> 

        </>
        );
}

export default CartWithProduct;