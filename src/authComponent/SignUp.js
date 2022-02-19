import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom';
import '../Styles/FormStyles.css';

function SignUp() {
    const redirect = useNavigate();
    const [user ,setUser] = useState({name:'',email:'' ,password:''});

    function changeHandler(e) {
        const { name, value } = e.target;
        setUser((user) =>({
            ...user,  [name]: value 
        }));

    };

    const clickHandler =(e)=>{
        e.preventDefault();
         
        axios.post('https://ecommerce-app-api-1.herokuapp.com/signup',user,{withCredentials:true}).then((res)=>{
            if(res.data.isDuplicateUser)
                alert("user already exist..")
            else if(res.data.isEmailSent){
                redirect('/signup/alphakey',{state:{...user}})
            }
    
            else
                alert('something went wrong try again');
            })
        
    }

    return (
        <div className='auth-wrapper'> 
        <form className="form">
            <label htmlFor="name" >Name : </label><br />
            <input type='text' name='name' id='name' value={user.name} onChange={changeHandler} />
            <label htmlFor="email" >Email : </label>
            <input type="email" name="email" id='email' value={user.email} onChange={changeHandler}/>  
            <label htmlFor="password" > Password : </label>
            <input type='password' name="password" id='password' value={user.password}  onChange={changeHandler}/>
            <button type='submit' onClick={clickHandler}>Sign Up</button>
            <p>Already have an account? <Link className='auth-link' to='/login'> LogIn</Link> </p>
        </form>
        </div>
   
    );
}

export default SignUp;