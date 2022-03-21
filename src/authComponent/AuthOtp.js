import React,{useState} from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';


function AuthOtp() {

    const urlData=useLocation();
    const redirect=useNavigate()
    const [localOtp,setLocalOtp]=useState('');
    const [authMes ,setAuthMes] =useState('');

    const changeHandler=(e)=> { 
        setLocalOtp(e.target.value);
    };

    const authResHandler=(res)=>{
        if(res.isUserAuth && res.isCorrectPassword){
            alert('user succesfully signed up');
            redirect("/LogIn");
        } 
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setAuthMes('Enter correct otp and password');
        else if( !res.isUserAuth && !res.isCorrectPassword)
            setAuthMes('please enter correct password')
        else
            setAuthMes('something went wrong try again');
    }


    // const ResendOTPFun=(e)=>{

    // }
    
    const VerifySignup=async(e)=>{
    e.preventDefault();
    try{
        const response= await axios.post('https://ecommerce-app-api-1.herokuapp.com/signup/alphakey',{...urlData.state,otp: parseInt(localOtp)})
        authResHandler(response.data)
    }
    catch(err){
        setAuthMes('something went wrong try again');
    }
}

    return ( 
    <div className='auth-wrapper'>
    <form className="form">
        <label htmlFor='localOtp' id='auth-otp-label'>Email verification OTP </label>
        <input name='otp' type='text' value={localOtp} onChange={changeHandler} />
        <button type="submit" onClick={VerifySignup} >Verify User</button>
        <p id="warn-message"> {authMes}</p>
    <p id='auth-otp-para'>We just send your OTP via your <br/>email <span id='auth-otp-email'>{ ( urlData.state)?urlData.state.email:''}</span> </p>
    <p id='auth-otp-para2'>The code will expire soon so Hurry up..</p>
    <button id='auth-otp-resend-btn' >Resend OTP</button>
    </form>
   
    </div> );

}
export default AuthOtp;