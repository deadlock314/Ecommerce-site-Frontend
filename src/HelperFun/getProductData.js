import axios from 'axios';
import ContextObj from './Context';

const getProductInfoData=async(prop)=>{
 
  
  try{
      const infoObj=await axios.get(`https://ecommerce-app-api-1.herokuapp.com/singleproduct/${ContextObj.productType}/${prop.ProductId}`);
      const exdesObj=await axios.get(`https://ecommerce-app-api-1.herokuapp.com/singleproductexdes/${ContextObj.productType}/${prop.ProductId}`);
      
      return {...infoObj.data,...exdesObj.data}
  }
  catch{
    return({})
  }
}

const getProductListData=async(url)=>{
 
  
  try{
      const productList=await axios.get(url);
      return productList.data;
  }
  catch{
    return([])
  }
}
export { getProductInfoData,getProductListData};