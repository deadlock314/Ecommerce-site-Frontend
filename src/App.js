import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NavBar from './Components/unitComponent/NavBar';
import LogIn from './Components/authComponent/LogIn';
import SignUp from './Components/authComponent/SignUp'
import ProductInfo from './Components/ProductComponent/ProductInfo';
import Products from './Components/ProductComponent/Products';
import Cart from './Components/CartComponents/Cart';
import UserProfile from "./Components/ProfileComponent/UserProfile";
import Footer from './Components/unitComponent/Footer';
import './Styles/globalStyles.css';
import AuthOtp from './Components/authComponent/AuthOtp';
import { setStorage } from './HelperFun/browserStorageFuns';
import BuyingPage from './Components/BuyingPageComponent/BuyingPage';

const App=()=> {

  setStorage("productType","laptops");

  
  return (

<>
<BrowserRouter>
 <NavBar/> 
<Routes>
 <Route path='/' element={<Products/>}/>
 <Route path='/products/:productName' element={<Products/>}/>
 <Route path='/login' element={<LogIn/>} />
 <Route path='/signup' element={<SignUp/>} />
 <Route path='/signup/alphakey' element={<AuthOtp/>} />
 <Route path='/cart/:ProductType/:ProductId' element={<Cart/>}/>
 <Route path='/cart' element={<Cart/>}/>
 <Route path='ProductInfo/:ProductType/:ProductId' element={<ProductInfo/>}/>
 <Route path='buyingpage/:ProductId' element={<BuyingPage/>}/>
 <Route path='buyingpage/:ProductId' element={<BuyingPage/>}/>
 <Route path='user/:userId' element={<UserProfile/>}/>
</Routes>
 <Footer/>
 </BrowserRouter>
</>

 

  )
   
};




export default App;
