import React, { useContext } from 'react';
import ExtendedDes from './ExtendedDes';
import CartButtons from '../unitComponent/CartButtons';
import Ratings from './Ratings';
import {ContextArr} from '../HelperFun/Context';

function PropsInfoStruct(props) {
 

     const productInfoProps=props.product;
     const Contextarr=useContext(ContextArr);

     const  newProductType=(typeof(Contextarr[0].productType)=='undefined')?'laptops':Contextarr[0].productType;  

    return ( 
       <>
       {productInfoProps?<div className="productInfoProps-struct" key={productInfoProps.productId} >
           <div className='productInfo-left-container'>
           <img className='productInfo-image' id={`productInfo-${newProductType}`} src={productInfoProps.imgLink}   alt={productInfoProps.name}/>
          <CartButtons prop={productInfoProps}/> 
          </div>
          <div className="productInfo-right-container">
           <p id='productInfo-des'> {productInfoProps.des}</p>
           <p id="productInfo-price">{productInfoProps.price}</p>
           <Ratings/>
           <ExtendedDes exdes={productInfoProps.extendedDes}></ExtendedDes>
           </div>
           
              
        </div> :<>  </>}
        </>
         );
}

export default PropsInfoStruct;