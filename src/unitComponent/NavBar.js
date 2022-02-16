import React, { useContext } from 'react';
import '../Styles/navbarStyles.css';
import  'font-awesome/css/font-awesome.min.css';
import {  Link } from 'react-router-dom';

import AuthNav from './AuthNav';



const NavBar=()=>{

    
   
      
  
    return(
   
                
    <header>
            <div >
            <nav id='navbar'>
               
                    <div id='upper-nav'>
                        <div className='company-name'>
                        < Link to='/'>
                        <p>EccentricStore</p>
                        </Link></div>
                        <div className='cart'>
                        < Link to='/cart'>
                        <i className='fa fa-shopping-cart'></i>
                        <p>cart</p>
                        </Link>
                        </div>
                               
                <AuthNav/>
 
                    </div>
                    <div id='lower-nav'>
                        <div className='home-purl'>
                        < Link to='/products/mobiles'>Mobiles</Link>
                        </div>
                        <div className='home-purl'>
                        < Link to='/products/laptops'>Laptops</Link>
                        </div>
                        <div className='home-purl'>
                        < Link to='/products/earphones'>Earphones</Link>
                        </div>

                    </div>  
                 
            </nav>
        </div>
    </header>

                
         
        )
       
    
}
 
export default NavBar;