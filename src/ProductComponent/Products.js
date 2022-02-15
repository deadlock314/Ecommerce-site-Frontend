import React,{useContext, useEffect,useState} from 'react';
import ProductStruct from './ProductStruct';
import '../Styles/ProductInfoStyles/productStyles.css';
import { useParams } from 'react-router';
import {getProductListData}  from '../HelperFun/getProductData';
import {ContextArr} from '../HelperFun/Context';
import Spinner from '../unitComponent/Spinner';
function Products() {

    const parmas=useParams();
    const ProductType=(typeof(parmas.productName)=='undefined')?'laptops':parmas.productName;
    const Contextarr=useContext(ContextArr)
    
    const [productList,setProductList]=useState([{}]);
    const [loading ,setLoading]=useState(true);
    useEffect(()=>
    {
        const FetchData=async()=>{
        const res= await getProductListData(`https://ecommerce-app-api-1.herokuapp.com/${ProductType}`)
        setProductList(res)
        Contextarr[1]({...Contextarr[0],productType:ProductType});
        setLoading(false)
    
    }
       FetchData();
    
    },[ProductType]);
    

    return ( 
        <>
        {
            loading ? <Spinner/> :
            <div className='home-container'>
                <p className='main-title'> {ProductType }</p>
                <div className='product-container'>
                    <ProductStruct props={productList} />
                </div>
            </div>
        }
        </>
     );
}

export default Products;