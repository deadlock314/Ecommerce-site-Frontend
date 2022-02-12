import React, { useContext } from 'react';
import '../Styles/ProductInfoStyles/productStyles.css';
import { useNavigate } from 'react-router';
import {ContextArr} from '../HelperFun/Context';
function ProductStruct(productList) {

    const redirect=useNavigate();
    const Contextarr=useContext(ContextArr)
    const ProductInfoFetch=(e)=>{
         
        (typeof(e.target.name) == undefined ||e.target.name== undefined) ?
        redirect('/') :redirect(`/ProductInfo/${e.target.name}`)

          }

    
          const  newProductType=(typeof(Contextarr[0].productType)=='undefined')?'laptops':Contextarr[0].productType;     
    return ( 
        <>
    {
productList.props.map((product)=>{

    return(
        
            <div className="product-struct" id={`product-struct-${newProductType}`} key={product.productId} onClick={ProductInfoFetch} >
                <div >
                    <img className='product-image' src={product.imgLink}  name={product.productId} alt={product.name}/>
                    <p id='product-des'> {product.des}</p>
                    <p id="product-price">{product.price}</p>   
                </div>
                
            </div>
         );
 })      
 
}
        </>  

    );
}

export default ProductStruct;