import axios from 'axios';
import React ,{useContext, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/FormStyles.css';
import {ContextArr} from '../HelperFun/Context';
import Spinner from '../unitComponent/Spinner';

 function LogIn() {
    const redirect = useNavigate();
    const GlobalContextArr=useContext(ContextArr);
    const [loading,setLoading]=useState(false);
        let [user ,setUser] = useState({email:'' ,password:''});
        const changeHandler =e=>{
            const {name , value}=e.target;
            setUser((user) =>({
                ...user,  [name]: value 
            }));
    
        };
    
        const clickHandler =(e)=>{
            
            e.preventDefault();
      
            axios.post('https://ecommerce-app-api-1.herokuapp.com/login',user,{withCredentials: true
        }).then((res)=>{
                if(res.data.isUserLoggedIn){
                    alert('user succesfully Logged-In') 
                    setLoading(true)
                        setUser ({email:'' ,password:''})
                        axios.get(`https://ecommerce-app-api-1.herokuapp.com/user/${res.data.id}`,{withCredentials: true
                    }).then((userdata)=>{
                        if(userdata.data){
                            GlobalContextArr[1]({...GlobalContextArr[0],isUserLoggedIn:res.data.isUserLoggedIn,userData:userdata.data}); 
                    redirect(`/user/${userdata.data.userAccData.userId}`);
                    }
                })
                        }
    
                    
                else{
                    alert('something went wrong try again');
                }
            }).catch((err)=>{
                console.warn(err);
                    alert('something went wrong try again');
            })
            
        }
        useEffect(()=>{
            setUser({email:'' ,password:''})
        },[GlobalContextArr[0].isUserLoggedIn])
    
        return (
            <>
            {
                (loading)?<Spinner/>:
                <div className='auth-wrapper'>
                 <form className="form">
                 <label htmlFor="email" >Email : </label>
                <input type="email" name="email" id='email' value={user.email} onChange={changeHandler}/>  
                <label htmlFor="password" > Password : </label>
                <input type='password' name="password" id='password' value={user.password}  onChange={changeHandler}/>
                <Link id='fpass' to='/forgotpassword'>Forgot your password</Link> 
                <button type='submit' onClick={clickHandler}>LogIn</button>
                <p>Didn't have any account ?<Link className='auth-link' to='/signup'> Sign Up</Link></p>
                <p>Right Now and enjoy your shoping ... </p>
            </form>
            </div>
            }
            </>
           
           
        );  
 }
 
 export default LogIn;