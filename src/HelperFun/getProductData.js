import axios from 'axios';



const getProductInfoData=async(prop,productType)=>{
  console.log(productType)

  
  try{
      const infoObj=await axios.get(`https://ecommerce-app-api-1.herokuapp.com/singleproduct/${productType}/${prop.ProductId}`,{withCredentials: true
    });
      const exdesObj=await axios.get(`https://ecommerce-app-api-1.herokuapp.com/singleproductexdes/${productType}/${prop.ProductId}`,{withCredentials: true
    });
      
      return {...infoObj.data,...exdesObj.data}
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