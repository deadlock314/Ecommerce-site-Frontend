import React from 'react';
import ExtendedDes from './ExtendedDes';
import CartButtons from '../unitComponent/CartButtons';
import Ratings from './Ratings';
import {useSelector} from 'react-redux';

const PropsInfoStruct=({product})=> {
 
   const productInfoProps=product.productInfo;
   const  ProductType= product.ProductType||useSelector((state)=>state.productType.value);

   return( 
       <>
         { 
         productInfoProps  ?  <div className="productInfoProps-struct" key={productInfoProps.productId} >
                        <div className='productInfo-left-container'>
                        <img className={`productInfo-image-${ProductType}`} id={`productInfo-${ProductType}`} src={productInfoProps.imgLink}   alt={productInfoProps.name}/>
                        <CartButtons prop={{productInfoProps,ProductType}}/> 
                        </div>
                        <div className="productInfo-right-container">
                        <p id='productInfo-des'> {productInfoProps.des}</p>
                        <p id="productInfo-price">{productInfoProps.price}</p>
                        <Ratings/>
                        <ExtendedDes exdes={productInfoProps.extendedDes}></ExtendedDes>
                        </div>
                     </div> :
                     <>  </>
         }
        </>
         );
}

export default PropsInfoStruct;