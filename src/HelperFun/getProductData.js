import axios from 'axios';

const getProductData=async(prop)=>{
 
  
  try{
      const infoObj=await axios.get('https://ecommerce-app-api-1.herokuapp.com/singleproduct/'+`${prop.ProductId}`);
      const exdesObj=await axios.get('https://ecommerce-app-api-1.herokuapp.com/singleproductexdes/'+`${prop.ProductId}`);
      
      return {...infoObj.data,...exdesObj.data}
  }
  catch{
    return({})
  }
}
export default getProductData;