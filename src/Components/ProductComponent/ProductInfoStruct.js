import React from 'react';
import ExtendedDes from './ExtendedDes';
import CartButtons from '../CartButtons';
import Ratings from './Ratings';
function ProductInfoPropsInfoStruct(props) {
   
     const productInfoProps=props.product[0];
    return ( 
        <div className="productInfoProps-struct" key={productInfoProps.id} >
           <div className='productInfo-left-container'>
           <img id='productInfo-image' src={productInfoProps.imgLink}   alt={productInfoProps.name}/>
          <CartButtons/> 
          </div>
          <div className="productInfo-right-container">
           <p id='productInfo-des'> {productInfoProps.des}</p>
           <p id="productInfo-price">{productInfoProps.price}</p>
           <Ratings/>
           <ExtendedDes exdes={productInfoProps.extendedDes}></ExtendedDes>
           </div>
           
              
        </div> );
}

export default ProductInfoPropsInfoStruct;