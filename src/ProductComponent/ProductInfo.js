import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductInfoStruct from './ProductInfoStruct';
import {getProductInfoData} from '../HelperFun/getProductData';
import { ContextArr } from '../HelperFun/Context';
import '../Styles/ProductInfoStyles/productInfoStyles.css';
import Spinner from '../unitComponent/Spinner';

function ProductInfo(prop) {
    
 const param=useParams();
 const Contextarr=useContext(ContextArr);


const [ productInfo,setProductInfo]=useState();
const [loading ,setLoading]=useState(true);

useEffect(()=>
{
     const FetchData=async()=>{
    const res= await getProductInfoData(param,Contextarr[0].productType||JSON.parse(localStorage.getItem('productType')));
    sessionStorage.setItem('productType',Contextarr[0].productType)
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