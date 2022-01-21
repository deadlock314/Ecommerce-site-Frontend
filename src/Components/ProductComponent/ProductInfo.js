import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductInfoStruct from './ProductInfoStruct';
import productInfoObj from '../../data/productInfoObj';
import '../../Styles/ProductInfoStyles/productInfoStyles.css';
function ProductInfo() {
    
 const params=useParams();
const [ productInfo,setProductInfo]=useState(productInfoObj)

//const productInfoContext=React.createContext(ProductInfo);
 const singleProduct=productInfo.filter((elem)=>elem.id==params.ProductId)
    return ( 
    <>
   <ProductInfoStruct product={singleProduct[0]}></ProductInfoStruct>
    </> );
}

export default ProductInfo;