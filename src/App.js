import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NavBar from './unitComponent/NavBar';
import LogIn from './authComponent/LogIn';
import SignUp from './authComponent/SignUp'
import ProductInfo from './ProductComponent/ProductInfo';
import Products from './ProductComponent/Products';
import Cart from './CartComponents/Cart';
import BuyingPage from './BuyingPageComponent/BuyingPage';
import UserProfile from "./UserProfileComponent/UserProfile";
import Footer from './unitComponent/Footer';
import './Styles/globalStyles.css';
import CartProductContext from './HelperFun/Context';

function App() {
 
  
  
  return (
<CartProductContext.Provider value={{priceObj:'00', prevCartData:new Set() ,productType:''}}>
<>
<BrowserRouter>
 <NavBar/> 
<Routes>
 <Route path='/' element={<Products/>}/>
 <Route path='/products/:productName' element={<Products/>}/>
 <Route path='/login' element={<LogIn/>} />
 <Route path='/signup' element={<SignUp/>} />
 <Route path='/cart/:ProductId' element={<Cart/>}/>
 <Route path='/cart' element={<Cart/>}/>
 <Route path='ProductInfo/:ProductId' element={<ProductInfo/>}/>
 <Route path='buyingpage/:ProductId' element={<BuyingPage/>}/>
 <Route path='buyingpage/:ProductId' element={<BuyingPage/>}/>
 <Route path='user/:userId' element={<UserProfile/>}/>
</Routes>
 <Footer/>
 </BrowserRouter>
</>
</CartProductContext.Provider>
 

  )
   
};




export default App;
