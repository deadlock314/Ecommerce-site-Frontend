import React from 'react';
import '../Styles/navbarStyles.css';
import  'font-awesome/css/font-awesome.min.css';
import {  Link } from 'react-router-dom';


class NavBar extends React.Component {

    render() { 

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
                        <i className='fa fa-shopping-cart'> cart</i>
                        </Link>
                        </div>
                        <div className='login'>
                        < Link to='/login'>LogIn</Link>
                        </div>
        
                    </div>
                    <div id='lower-nav'>
                        <div className='home-purl'>
                        < Link to='/'>Mobiles</Link>
                        </div>
                        <div className='home-purl'>
                        < Link to='/'>Laptops</Link>
                        </div>
                        <div className='home-purl'>
                        < Link to='/'>Earphones</Link>
                        </div>

                    </div>  
                 
            </nav>
        </div>
    </header>

            
        )
       
    }
}
 
export default NavBar;