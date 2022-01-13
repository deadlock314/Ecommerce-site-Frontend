import React from 'react';
import '../../Styles/ExdesStyles.css'
function ExtendedDes(props) {
   const ExDes=props.exdes;

   const keys=Object.keys(ExDes);
   
    return ( 
        <>
         <p id='productInfo-maintitle'>Product Specifications</p>
      {
           keys.map((key)=>{
            return(
                <div>
                 <p id='specification-subheading'> {key} </p>
                <hr/>
                <div>
              {
               ExDes[key].map((param)=>{
                      const paramKey=[Object.keys(param)[0]];
                      return(
                        <div id='specification-obj'>
                         <p className='specification-val'>  { paramKey }  </p>
                          
                            
                            <p className='specification-val'>{param[paramKey]}</p>
                        </div>
      
                      );
                    
                    }) }
                </div>
                </div>
              

            )

           })
      } 
        </>
     );
}

export default ExtendedDes;