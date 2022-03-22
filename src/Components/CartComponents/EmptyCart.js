import React from 'react';
import { useNavigate } from 'react-router';
import '../../Styles/CartStyles/EmptyCartStyles.css';


function EmptyCart() {
    const redirect=useNavigate();
    return ( 
        <div className='emptycart'>
        
       <div className='emptycart-wrapper'>
           <p>Your EccentricStore Cart is empty..</p>
        <button className='emptycart-btn' onClick={()=>redirect('/login')} >LogIn to your account</button>
        <button className='emptycart-btn' onClick={()=>redirect('/signup')}>Sign Up Now</button>
       </div>
       
        
        
        </div>

     );
}

export default EmptyCart;