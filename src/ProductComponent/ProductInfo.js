import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductInfoStruct from './ProductInfoStruct';
import {getProductInfoData} from '../HelperFun/getProductData';
import '../Styles/ProductInfoStyles/productInfoStyles.css';

function ProductInfo(prop) {
    
 const param=useParams();



const [ productInfo,setProductInfo]=useState();
const [loading ,setLoading]=useState(true);

useEffect(()=>
{
     const FetchData=async()=>{
    const res= await getProductInfoData(param)
    setProductInfo(res)
    setLoading(false)

}
   FetchData();

},[]);




    return ( 
    <>
    {loading ?(<></>) :(<ProductInfoStruct product={ productInfo} />)}
   
   </>
   );
}

export default ProductInfo;