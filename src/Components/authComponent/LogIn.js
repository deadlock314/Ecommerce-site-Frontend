import axios from 'axios';
import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/FormStyles.css';

 function LogIn() {
    const redirect = useNavigate();
        let [user ,setUser] = useState({email:'' ,password:''});
     
        const changeHandler =e=>{
            const {name , value}=e.target;
            setUser((user) =>({
                ...user,  [name]: value 
            }));
    
        };
    
        const clickHandler =(e)=>{
            e.preventDefault();
            axios.post('http://localhost:5000/login',user,{withCredentials: true
        }).then((res)=>{
                if(res.data.isUserLoggedIn){
                    alert('user succesfully Logged-In') 
                     setUser ({email:'' ,password:''})
                    redirect("/");
                }
                else{
                    alert('something went wrong try again');
                }
            }).catch((err)=>{
                    alert('something went wrong try again');
            })
            
        }
    
        return (
            <div className='auth-wrapper'>
                 <form className="form">
                 <label htmlFor="email" >Email : </label>
                <input type="email" name="email" id='email' value={user.email} onChange={changeHandler}/>  
                <label htmlFor="password" > Password : </label>
                <input type='text' name="password" id='password' value={user.password}  onChange={changeHandler}/>
                <Link id='fpass' to='/forgotpassword'>forgot your password</Link> 
                <button type='submit' onClick={clickHandler}>LogIn</button>
                <p>Didn't have any account ?<Link className='auth-link' to='/signup'> Sign Up</Link></p>
                
                <p>Right Now and enjoy your shoping ... </p>
            </form>
            </div>
           
           
        );  
 }
 
 export default LogIn;