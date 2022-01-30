import React,{useEffect,useState} from 'react';
import ProductStruct from './ProductStruct';
import '../../Styles/ProductInfoStyles/productStyles.css';
import { useParams } from 'react-router';
import {getProductListData}  from '../../HelperFun/getProductData';
function Products() {

    const parmas=useParams();

    const [productList,setProductList]=useState([{}]);
    const [loading ,setLoading]=useState(true);
    useEffect(()=>
    {
         const FetchData=async()=>{
       
        let url =(parmas.productName)?`https://ecommerce-app-api-1.herokuapp.com/products/${parmas.productName}` :'https://ecommerce-app-api-1.herokuapp.com/';
        const res= await getProductListData(url)
        setProductList(res)
        setLoading(false)
    
    }
       FetchData();
    
    },[]);
   

    return ( 
        <>
        {
            loading ?<> </> : <>
            <p className='main-title'>Laptops</p>
            <div className='product-container'>
            
                <ProductStruct props={productList} />
            </div>
            </>
        }
        
      
        </>
     );
}

export default Products;