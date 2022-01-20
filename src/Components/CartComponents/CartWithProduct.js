import React from 'react';
import CartProductStruct from './CartProductStruct';
import SudoComponent from './SudoComponent';
import ProductCounter from './ProductCount';
import PastDataFun from '../../HelperFun/PastDataFun';
import '../../Styles/CartStyles/CartPS.css';


function CartWithProduct(prop) {

  let pastCartData=sessionStorage.getItem('CartProductKey');

let pastdata=[];
let pastNormData=[];

if(pastCartData==null){
 pastdata=[]
sessionStorage.setItem('CartProductKey',JSON.stringify( PastDataFun(pastdata.concat(prop.props)) )) 
}

else{
pastNormData=JSON.parse(pastCartData);
sessionStorage.setItem('CartProductKey',JSON.stringify( PastDataFun(pastNormData.concat(prop.props)) ))
}




  let [priceObj,setPriceObj]=React.useState({price:prop.props[0].priceInt,discount:prop.props[0].discountInt,totalAmount:prop.props[0].priceInt-prop.props[0].discountInt})
  let pastData=sessionStorage.getItem('sessionPriceObj');
     
  if(pastData==null)
  {
     pastData=JSON.parse(pastData);
     pastData={price:0,discount:0,totalAmount:0}
  }

  else {

   pastData=JSON.parse(pastData)
  }

const [count,setCount]=React.useState(1)

  const sendDataToCalculator=(cdata)=>{

    setCount(cdata.count)
    priceObj.totalAmount=priceObj.totalAmount+cdata.totalAmount*cdata.mode;
    setPriceObj(priceObj);
    

  }

   React.useEffect(()=>{

    if(priceObj.price != 2*pastData.price || pastData.price !=0)
    {
    priceObj.totalAmount=priceObj.totalAmount+pastData.totalAmount;
     setPriceObj(priceObj);
    
    }

  },[]);

    return ( 
                
        <>
       {
           prop.props.map((cartProduct)=>{
            return(
              <>
              <CartProductStruct props={cartProduct}  />
              <ProductCounter props={cartProduct} fun={sendDataToCalculator}/>
               
            </>
        ); 
        })
       }
       <hr/>
        <div id='calc'>    
     
    <p className='calc-value'>Total Amount ₹{priceObj.totalAmount }</p>
    <SudoComponent props={priceObj} />
    
      </div>    
        </>
        );
}

export default CartWithProduct;