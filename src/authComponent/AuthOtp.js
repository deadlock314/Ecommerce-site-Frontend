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
    <>
    <form className="form">
        <label htmlFor='localOtp'>Email verification OTP </label>
        <input name='otp' type='text' value={localOtp} onChange={changeHandler} />
        <button type="submit" onClick={VerifySignup} >Verify User</button>
    </form>
    <p>We just send your OTP via your email {urlData.state.email} </p>
    <p>The code will expire soon so Hurry up..</p>
    <button >Resend OTP</button>
    </> );

}
export default AuthOtp;