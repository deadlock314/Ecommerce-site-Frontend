import React from 'react';
import '../Styles/navbarStyles.css';
import  'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

    render() { 

        return (
            <div>
                <nav>
                <ul>
                    <Link to='/'>
                    <li className='company-name'>
                        <p>EccentricStore</p>
                    </li>
                    </Link>

                    <li className='cart'>
                        <Link to='/cart'>
                            <i className='fa fa-shopping-cart'> cart</i>
                        </Link>
                    </li>
                    <li className='login'>
                        <Link to='/login'>LogIn</Link>
                    </li>   
                </ul>   
                </nav>
            </div>
        )
       
    }
}
 
export default NavBar;