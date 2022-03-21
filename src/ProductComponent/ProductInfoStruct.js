import React from 'react';
import CartButtons from '../unitComponent/CartButtons';
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import Spinner from '../unitComponent/Spinner';
import ProductExtendedDes from './ProductExtendedDes';

const PropsInfoStruct = ({ product  }) => {

   const productInfoProps = product.state;
   const ProductType = product.ProductType || useSelector((state) => state.productType.value);

   return (
      <>
         {
            productInfoProps ? <div className="productInfoProps-struct" key={productInfoProps.productId} >
               <div className='productInfo-left-container'>
                  <img className={`productInfo-image-${ProductType}`} id={`productInfo-${ProductType}`} src={productInfoProps.imgLink} alt={productInfoProps.name} />
                  <CartButtons prop={{ productInfoProps, ProductType }} />
               </div>
               <div className="productInfo-right-container">
                  <p id='productInfo-des'> {productInfoProps.des}</p>
                  <p id="productInfo-price">{productInfoProps.price}</p>
                  <Ratings />
                  {
                     product.loading ? <Spinner /> : <ProductExtendedDes exdes={product.exdes} />
                  }
               </div>
            </div> :
               <>  </>
         }
      </>
   );
}

export default PropsInfoStruct;