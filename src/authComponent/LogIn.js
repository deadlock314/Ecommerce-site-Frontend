import axios from 'axios';
import React ,{ useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/FormStyles.css';
import Spinner from '../unitComponent/Spinner';
import {changeUserAuth,setUserData} from '../ReduxCode/Reducers';

 function LogIn() {

    const redirect = useNavigate();
    const [loading,setLoading]=useState(false);
    const [loggedInMes,setLoggedInMes]=useState('');

    const dispatch=useDispatch();

    let [user ,setUser] = useState({email:'' ,password:''});
        const changeHandler =e=>{
            const {name , value}=e.target;
            setUser((user) =>({ ...user,  [name]: value   }));
        };
        
        const loginResHandler=(res)=>{

            if(res.isUserLoggedIn && res.isCorrectPassword){
                alert('user succesfully Logged-In') 
                setLoading(true)
                setUser ({email:'' ,password:''})
                axios.get(`https://ecommerce-app-api-1.herokuapp.com/user/${res.data.id}`,{withCredentials: true
                }).then((userdata)=>{
                        if(userdata.data){
                            dispatch(changeUserAuth(true))
                            dispatch(setUserData(userdata.data)) 
                            redirect(`/user/${userdata.data.userAccData._Id}`);
                       }
                    })
            }
            else if(!res.isCorrectPassword && !res.isCorrectUser)
               setLoggedInMes('Enter correct email and password');
            else if( !res.isUserLoggedIn && !res.isCorrectPassword)
               setLoggedInMes('Please enter correct password')
            else
               setLoggedInMes('Something went wrong try again');

        }
    
        const clickHandler = async(e)=>{
            e.preventDefault();
            try{
                const response= await axios.post('https://ecommerce-app-api-1.herokuapp.com/login',user,{withCredentials: true})
                loginResHandler(response.data)
            }
            catch(err){
                setLoggedInMes('Something went wrong try again');
            }
        }


    
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
                <p id="warn-message"> {loggedInMes}</p>
                <p>Didn't have any account ?<Link className='auth-link' to='/signup'> Sign Up</Link></p>
                <p>Right Now and enjoy your shoping </p>
            </form>
            </div>
            }
            </>
           
           
        );  
 }
 
 export default LogIn;