import React from 'react';
import ProductStruct from './ProductStruct';
import '../../Styles/ProductInfoStyles/productStyles.css';
import axios from 'axios';
function Products() {

    

    const [productList,useUpdateProductList]=React.useState([{id:0,imgLink:''}]);
    React.useEffect(()=>{
       axios.get('https://ecommerce-app-api-1.herokuapp.com/',{withCredentials:true}).then((res)=>{
        console.log(res.data)
        useUpdateProductList(res.data);
    }).catch((err)=>{
        console.log(err)
    })  
    },[])
   

    return ( 
        <>
        <h1 className='main-title'>Laptops</h1>
        <div className='product-container'>
        
            <ProductStruct props={productList} />
        </div>
      
        </>
     );
}

export default Products;