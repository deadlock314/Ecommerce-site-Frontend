import React,{useEffect,useState} from 'react';
import ProductStruct from './ProductStruct';
import '../../Styles/ProductInfoStyles/productStyles.css';
import axios from 'axios';
function Products() {

    

    const [productList,useUpdateProductList]=useState([{}]);
    const [loading ,setLoading]=useState(true);
    useEffect(()=>{
       axios.get('https://ecommerce-app-api-1.herokuapp.com/',{withCredentials:true}).then((res)=>{
       
        useUpdateProductList(res.data);
        setLoading(false)
    }).catch((err)=>{
        console.log(err)
    })  
    },[])
   

    return ( 
        <>
        {
            loading ?<> </> : <>
            <h1 className='main-title'>Laptops</h1>
            <div className='product-container'>
            
                <ProductStruct props={productList} />
            </div>
            </>
        }
        
      
        </>
     );
}

export default Products;