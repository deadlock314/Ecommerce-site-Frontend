import React,{ useEffect,useState} from 'react';
import ProductStruct from './ProductStruct';
import '../Styles/ProductInfoStyles/productStyles.css';
import { useParams } from 'react-router';
import {getProductListData}  from '../HelperFun/getProductData';
import Spinner from '../unitComponent/Spinner';
import {  getStorage, setStorage } from '../HelperFun/browserStorageFuns';

const Products=()=> {

    const params=useParams();
    
    const ProductType= params.productName|| getStorage("productType");

    const [productList,setProductList]=useState([{}]);
    const [loading ,setLoading]=useState(true);

    useEffect(()=>
    {
        const FetchData=async()=>{
            if(getStorage("homeProducts") && getStorage("productType")==ProductType)
                setProductList(JSON.parse(getStorage("homeProducts")))
            else{
              const res= await getProductListData(`https://ecommerce-app-api-1.herokuapp.com/${ProductType}`)
               setProductList(res[0][ProductType]);
               setStorage("homeProducts",JSON.stringify(res[0][ProductType]));
            }
        setLoading(false);
        
    }
       FetchData();
    setStorage("productType",ProductType);
      
    },[params.productName]);


    return ( 
        <>
        {
            loading ? <Spinner/> :
            <div className='home-container'>
                <p className='main-title'> {ProductType }</p>
                <div className='product-container'>
                    {
                        productList.map((p)=>{
                            return(
                                <ProductStruct props={p} key={p._id} />
                            )
                        })
                    }
                    
                </div>
            </div>
        }
        </>
     );
}

export default Products;