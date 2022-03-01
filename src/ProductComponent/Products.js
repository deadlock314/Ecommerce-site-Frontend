import React,{ useEffect,useState} from 'react';
import ProductStruct from './ProductStruct';
import '../Styles/ProductInfoStyles/productStyles.css';
import { useParams } from 'react-router';
import {getProductListData}  from '../HelperFun/getProductData';
import Spinner from '../unitComponent/Spinner';
import { useSelector } from 'react-redux';

const Products=()=> {

    const params=useParams();
    const ProductType= params.productName|| useSelector((state)=>state.productType.value)

    const [productList,setProductList]=useState([{}]);
    const [loading ,setLoading]=useState(true);

    useEffect(()=>
    {
        const FetchData=async()=>{
        const res= await getProductListData(`https://ecommerce-app-api-1.herokuapp.com/${ProductType}`)
        setLoading(false); 
        setProductList(res)
    }
       FetchData();
      
    },[params.productName]);

 
    return ( 
        <>
        {
            loading ? <Spinner/> :
            <div className='home-container'>
                <p className='main-title'> { }</p>
                <div className='product-container'>
                    <ProductStruct props={{productList,ProductType:ProductType}} />
                </div>
            </div>
        }
        </>
     );
}

export default Products;