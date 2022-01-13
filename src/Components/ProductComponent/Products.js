import React from 'react';
import ProductStruct from './ProductStruct';
import Productdata from '../../data/productData';
import '../../Styles/productStyles.css';
function Products() {

    const [productList,useUpdateProductList]=React.useState(Productdata);

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