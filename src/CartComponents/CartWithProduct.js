import React, { useContext, useState } from 'react';
import CartProductStruct from './CartProductStruct';
import ProductCounter from './ProductCount';
import '../Styles/CartStyles/CartPS.css';
import { useNavigate } from 'react-router';
import CartProductContext from '../HelperFun/Context';
import {priceAdder} from '../HelperFun/priceAdder';
function CartWithProduct(prop) {

  
  const redirect=useNavigate();

const ContextObj=useContext(CartProductContext);

const [setToArray ,setSetToArray]= useState([]);
const [count,setCount]=React.useState(1);

  const sendDataToCalculator=(cdata)=>{
    setCount(cdata.count)
  }
console.log(prop.props[0].price);

  React.useEffect(()=>{
    ContextObj.priceObj= '₹'+priceAdder(ContextObj.priceObj,prop.props[0].price);
    
    ContextObj.prevCartData.add(JSON.stringify(prop.props[0]))
    setSetToArray(Array.from(ContextObj.prevCartData))
  },[]);


    return ( 
      <>
       {
          setToArray.map(( cartProduct )=>{
            return(
              <div key={ new Date().getMilliseconds}>
              {
                (cartProduct!="{}")?<> <CartProductStruct props={JSON.parse(cartProduct)}  />
                                     <ProductCounter props={JSON.parse(cartProduct)} fun={sendDataToCalculator}/>
                                  </>
                                  :<></>
               
              }
              </div>
        ); 
        })
       }
       <hr/>

          <div id='calc'>    
     
            <p className='calc-value'>Total Amount {ContextObj.priceObj}</p>
            <button id='buypage-button' onClick={()=>redirect('/buyingpage/morethanonep')}>Buy Now</button>
            
          </div> 

        </>
        );
}

export default CartWithProduct;