import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductInfoStruct from './ProductInfoStruct';
import {getProductInfoData} from '../HelperFun/getProductData';
import '../Styles/ProductInfoStyles/productInfoStyles.css';
import Spinner from '../unitComponent/Spinner';
import { useSelector } from 'react-redux';

const ProductInfo=()=> {
    
const param=useParams();
const ProductType= param.ProductType|| useSelector((state)=>state.productType.value);

const [ productInfo,setProductInfo]=useState();
const [loading ,setLoading]=useState(true);

useEffect(()=>
{
   const FetchData=async()=>{
   const res= await getProductInfoData(param,ProductType);
   setProductInfo(res)
   setLoading(false)
}
   FetchData();

},[]);


    return ( 
    <>
    {loading ?<Spinner/> :(<ProductInfoStruct product={ productInfo} />)}
   
   </>
   );
}

export default ProductInfo;