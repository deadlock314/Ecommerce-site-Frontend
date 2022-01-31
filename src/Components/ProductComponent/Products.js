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

    const  newProductType=(typeof(productType)=='undefined')?'laptops':productType;

    return ( 
        <>
        {
            loading ?<> </> :
            <div className='home-container'>
                <p className='main-title'> {newProductType }</p>
                <div className='product-container'>
                    <ProductStruct props={productList} />
                </div>
            </div>
        }
        </>
     );
}

export default Products;