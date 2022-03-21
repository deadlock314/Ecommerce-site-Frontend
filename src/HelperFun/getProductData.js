import axios from 'axios';

const getProductInfoData=async(productType,id)=>{
  try{
      const exdesObj=await axios.get(`https://ecommerce-app-api-1.herokuapp.com/singleproductexdes/${productType}/${id}`,{withCredentials: true
    });
      return {...exdesObj.data.extendedDes}
  }
  catch{
    return({})
  }
}

const getProductListData=async(url)=>{
 
  
  try{
      const productList=await axios.get(url,{withCredentials: true
      });
     
      return productList.data;
  }
  catch{
    return([])
  }
}
export { getProductInfoData,getProductListData};