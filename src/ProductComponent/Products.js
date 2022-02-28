import React,{useContext, useEffect,useState} from 'react';
import ProductStruct from './ProductStruct';
import '../Styles/ProductInfoStyles/productStyles.css';
import { useParams } from 'react-router';
import {getProductListData}  from '../HelperFun/getProductData';
import Spinner from '../unitComponent/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {changeProductType} from '../ReduxCode/Reducers'

function Products() {

    const parmas=useParams();
   
    const ProductType=useSelector((state)=>state.productType.value)
    const dispatch=useDispatch();

    const [productList,setProductList]=useState([{}]);
    const [loading ,setLoading]=useState(true);

    useEffect(()=>
    {
        const FetchData=async()=>{
        const res= await getProductListData(`https://ecommerce-app-api-1.herokuapp.com/${ProductType}`)
        setProductList(res)
        dispatch(changeProductType(ProductType));
        setLoading(false);
    }
       FetchData();
    
    },[ProductType]);
    

    return ( 
        <>
        {
            loading ? <Spinner/> :
            <div className='home-container'>
                <p className='main-title'> {ProductType }</p>
                <div className='product-container'>
                    <ProductStruct props={productList} />
                </div>
            </div>
        }
        </>
     );
}

export default Products;