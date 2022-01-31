import React,{useEffect,useState} from 'react';
import ProductStruct from './ProductStruct';
import '../../Styles/ProductInfoStyles/productStyles.css';
import { useParams } from 'react-router';
import {getProductListData}  from '../../HelperFun/getProductData';
import ContextObj from '../../HelperFun/Context';
function Products() {

    const parmas=useParams();
    const productType=parmas.productName;
    ContextObj.productType=productType;
    const [productList,setProductList]=useState([{}]);
    const [loading ,setLoading]=useState(true);
    useEffect(()=>
    {
        const FetchData=async()=>{

        const res= await getProductListData(`https://ecommerce-app-api-1.herokuapp.com/${productType}`)
        setProductList(res)
        setLoading(false)
    
    }
       FetchData();
    
    },[productType]);

    return ( 
        <>
        {
            loading ?<> </> : <>
            <p className='main-title'>{productType || 'laptops'}</p>
            <div className='product-container'>
            
                <ProductStruct props={productList} />
            </div>
            </>
        }
        
      
        </>
     );
}

export default Products;