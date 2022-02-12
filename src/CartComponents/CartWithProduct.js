import React, { useContext, useState } from 'react';
import CartProductStruct from './CartProductStruct';
import ProductCounter from './ProductCount';
import '../Styles/CartStyles/CartPS.css';
import { useNavigate } from 'react-router';
import {CartContextArr,ContextArr} from '../HelperFun/Context';
import {priceAdder} from '../HelperFun/priceAdder';
function CartWithProduct(prop) {

  
const redirect=useNavigate();

const Cartcontextarr=useContext(CartContextArr);
const Contextarr=useContext(ContextArr);
const [setToArray ,setSetToArray]= useState([]);
const [count,setCount]=React.useState(1);

  const sendDataToCalculator=(cdata)=>{
    setCount(cdata.count)
  }
console.log(prop.props[0].price);

  React.useEffect(()=>{
    Contextarr[1]( {...Contextarr[0],priceObj: priceAdder(Contextarr[0].priceObj,prop.props[0].price)});
    
    Cartcontextarr[1]({...Cartcontextarr[0], prevCartData:Cartcontextarr[0].prevCartData.add(JSON.stringify(prop.props[0])) })
    setSetToArray(Array.from(Cartcontextarr[0].prevCartData))
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
     
            <p className='calc-value'>Total Amount  ₹{Contextarr[0].priceObj}</p>
            <button id='buypage-button' onClick={()=>redirect('/buyingpage/morethanonep')}>Buy Now</button>
            
          </div> 

        </>
        );
}

export default CartWithProduct;