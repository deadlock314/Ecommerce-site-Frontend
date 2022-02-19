import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react/cjs/react.development';

function AuthOtp() {

    const urlData=useLocation();
    const redirect=useNavigate()
    const [localOtp,setLocalOtp]=useState('');

    const changeHandler=(e)=> { ;
        setLocalOtp(e.target.value);
    };

    // const ResendOTPFun=(e)=>{

    // }

    const VerifySignup=(e)=>{
    e.preventDefault();
    axios.post('https://ecommerce-app-api-1.herokuapp.com/signup/alphakey',{...urlData.state,otp: parseInt(localOtp)}).then((res)=>{
    if(res.data.isOtpWrong){
        alert('enter correct otp value');
    }
    else if(res.data.isUserSignedUp){
        alert('user succesfully signed up');
        redirect("/LogIn");
    }  
    else
        alert('something went wrong try again');
    })
}

    return ( 
    <div className='auth-wrapper'>
    <form className="form">
        <label htmlFor='localOtp' id='auth-otp-label'>Email verification OTP </label>
        <input name='otp' type='text' value={localOtp} onChange={changeHandler} />
        <button type="submit" onClick={VerifySignup} >Verify User</button>
    <p id='auth-otp-para'>We just send your OTP via your <br/>email <span id='auth-otp-email'>{ (urlData.state)?urlData.state.email:''}</span> </p>
    <p id='auth-otp-para2'>The code will expire soon so Hurry up..</p>
    <button id='auth-otp-resend-btn' >Resend OTP</button>
    </form>
   
    </div> );

}
export default AuthOtp;