import React from 'react';
import '../../Styles/ProductInfoStyles/productStyles.css';
import { useNavigate } from 'react-router';

function ProductStruct(productList) {
    const redirect=useNavigate();
    const ProductInfoFetch=(e)=>{
         
        if(typeof(e.target.name) == undefined ||e.target.name== undefined)
        redirect('/')
        else
        redirect(`/ProductInfo/${e.target.name}`)
          
          }

    return ( 
        <>{
productList.props.map((product)=>{

    return(
        
             <div className="product-struct" key={product.id} onClick={ProductInfoFetch} >
                <img id='product-image' src={product.imgLink}  name={product.id} alt={product.name}/>
                <p id='product-des'> {product.des}</p>
                <p id="product-price">{product.price}</p>   
             </div>
            
       
    );
})}
     </>  

    );
}

export default ProductStruct;