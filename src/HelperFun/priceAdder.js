
export const priceAdder=(p1,p2)=>{
   
    const strP1=(typeof(p1)=='string')?p1:p1.toString();
    const strP2=(typeof(p2)=='string')?p2:p2.toString();
    

    const filterComma=(str)=>{
      return parseInt(str.replace(/,/g,''))
    }
    
    let priceStr;
   
    priceStr=filterComma(strP1.substring(1))+filterComma(strP2.substring(1));

    return priceStr;

 
}