
export const priceAdder=(p1,p2,mode,frequen)=>{

const val=(mode=='sub')?-1:1;
const countVal=(typeof(frequen)=='undefined')?1:frequen;

   if(typeof(p2)=='undefined')
   return p1;
   
   else{
      const strP1=(typeof(p1)=='string')?p1:p1.toString();
    const strP2=(typeof(p2)=='string')?p2:p2.toString();
    

    const filterComma=(str)=>{
      return parseInt(str.replace(/,/g,''))
    }
    
    let priceStr;
    priceStr=filterComma(strP1)+filterComma(strP2.substring(1))*val*countVal;
console.warn(priceStr,typeof(frequen));
    return priceStr;
   }
   
 
}