import React from 'react';
import '../../Styles/ProductInfoStyles/productStyles.css';
import { useNavigate } from 'react-router';
import {  getStorage } from '../../HelperFun/browserStorageFuns';


function ProductStruct({ props }) {

    const redirect = useNavigate();
    const productType=getStorage("productType");
    
    const ProductInfoFetch = (e) => {
        (typeof (e.target.name) == undefined || e.target.name == undefined) ?
            redirect('/') : redirect(`/ProductInfo/${productType}/${e.target.name}`, { state: props })

    }

    return (
        <>


            <div className="product-struct" id={`product-struct-${productType}`} key={props._id + `11`} onClick={ProductInfoFetch} >
                <div>
                    <img className='product-image' src={props.imgLink} name={props.productId} alt={props.name} />
                    <p id='product-des'> {props.des}</p>
                    <p id="product-price">{props.price}</p>
                </div>

            </div>

        </>

    );

}

export default ProductStruct;