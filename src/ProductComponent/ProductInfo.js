import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import ProductInfoStruct from './ProductInfoStruct';
import '../Styles/ProductInfoStyles/productInfoStyles.css';
import Spinner from '../unitComponent/Spinner';
import { getStorage } from '../HelperFun/browserStorageFuns';
import { getProductInfoData } from '../HelperFun/getProductData';
import ProductExtendedDes from './ProductExtendedDes';

const ProductInfo = () => {

   const param = useParams();

   const { state } = useLocation();

   const ProductType = param.ProductType || getStorage("productType");

   const [loading, setLoading] = useState(true);

   const [exdes, setExdes] = useState({});

   useEffect(() => {
      getProductInfoData(ProductType, state.productId).then((res) => {
         console.log(res);
         setExdes(res)
         setLoading(false)
      }

      )
   }, []);

   return (

            <ProductInfoStruct product={{ state, ProductType,exdes ,loading }} />

   );
}

export default ProductInfo;