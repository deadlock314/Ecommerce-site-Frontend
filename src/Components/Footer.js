import React from 'react';
import { Link} from 'react-router-dom';
import  'font-awesome/css/font-awesome.min.css';
import './../Styles/FooterStyles.css'
function Footer() {
    return ( 
        <>
        <footer>
        <div className='footer-outerarea'>
        <div className='footer-col'>
            <div className='footer-row'>
                <p className='footer-subtitle'>About</p>
                <ul className='footer-list'>
                    <li><Link to='/' className='footer-li-item'> About Us</Link> </li>
                    <li><Link to='/' className='footer-li-item'> Press Releases </Link> </li>
                    <li><Link to='/' className='footer-li-item'> Careers </Link> </li>
                </ul>
            </div>
            <div className='footer-row'>
                <p className='footer-subtitle'>Help</p>
                <ul className='footer-list'>
                    <li><Link to='/' className='footer-li-item'> Return Policy</Link> </li>
                    <li><Link to='/' className='footer-li-item'> Report </Link> </li>
                    <li><Link to='/' className='footer-li-item'> Privacy </Link> </li>
                    <li><Link to='/' className='footer-li-item'> FAQ </Link> </li>
                </ul>
            </div>
            <div className='footer-row'>
                <p className='footer-subtitle'>Connect With us</p>
                <ul className='footer-li-icontainer'>
                    <li><a className='footer-li-icon' href='https://facebook.com' target='_blank'> <i className='fa fa-facebook-square' ></i></a> </li>
                    <li><a className='footer-li-icon' href='https://instagram.com/chandan.sonii' target='_blank'> <i className='fa fa-instagram' ></i></a> </li>
                    <li><a className='footer-li-icon' href='https://linkedin.com/in/chandan-soni-10926a1b5' target='_blank'> <i className='fa fa-linkedin-square' ></i></a> </li>
                    <li><a className='footer-li-icon' href='mailto:chandansoni2270@gmail.com'target='_blank' > <i className='fa fa-envelope' ></i></a> </li>
                </ul>
            </div>   
        </div>
        </div>
        <p id='cpright'>  &copy; Copyright { new Date().getFullYear()} EccentricStore</p>
        </footer>
        </>
     );
}

export default Footer;