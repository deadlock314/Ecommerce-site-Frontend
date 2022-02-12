import axios from 'axios';
import React,{useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';

import {ContextArr} from '../HelperFun/Context';
function AuthNav(prop) {

    const Contextarr=useContext(ContextArr);
    const redirect=useNavigate()
    const clickLogoutHandler=(e)=>{
        e.preventDefault()
        axios.post('https://ecommerce-app-api-1.herokuapp.com/logout',{},{withCredentials: true
        }).then((res)=>{
                if(res.data.isUserLoggedOut){
                    alert('user succesfully Logged-out') 
                     
                    Contextarr[1]({...Contextarr[0],isUserLoggedIn: !(res.data.isUserLoggedOut)});
                    redirect('/') 
                    
                }
                else{
                    alert('something went wrong try again');
                }
            }).catch((err)=>{
                    alert('something went wrong try again');
                    console.warn(err)
            })
            

    }

    return ( 
        <>
        {
            (Contextarr[0].isUserLoggedIn )
            ?
            <div className='login-logout' onClick={clickLogoutHandler}>
            <p id='nav-logout'>LogOut</p>
            </div>    
            :
            <div className='login-logout'>
            < Link to='/login'>LogIn</Link>
            </div>
        }
        </>

     );


}

export default AuthNav;