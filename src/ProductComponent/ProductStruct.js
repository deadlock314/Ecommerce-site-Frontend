import React from 'react';
import '../Styles/ProductInfoStyles/productStyles.css';
import { useNavigate } from 'react-router';

function ProductStruct(prop) {
    const redirect=useNavigate();
    const ProductInfoFetch=(e)=>{
        (typeof(e.target.name) == undefined ||e.target.name== undefined) ?
            redirect('/') :redirect(`/ProductInfo/${prop.props.ProductType}/${e.target.name}`)

    }
  
    return( 
    <>
    {
    prop.props.productList.map((product)=>{

    return(
        
            <div className="product-struct" id={`product-struct-${prop.props.ProductType}`} key={product._id+`11`} onClick={ProductInfoFetch} >
                <div>
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