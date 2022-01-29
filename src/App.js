import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import LogIn from './Components/authComponent/LogIn';
import SignUp from './Components/authComponent/SignUp'
import ProductInfo from './Components/ProductComponent/ProductInfo';
import Products from './Components/ProductComponent/Products';
import Cart from './Components/CartComponents/Cart';
import BuyingPage from './BuyingPageComponent/BuyingPage';
import Footer from './Components/Footer';
import './Styles/globalStyles.css';
import CartProductContext from './HelperFun/Context';

function App() {
 
  
  
  return (
<CartProductContext.Provider value={{priceObj:0, prevCartData:new Set()}}>
<>
<BrowserRouter>
 <NavBar/> 
 <Routes>
 <Route path='/' element={<Products/>}/>
 <Route path='/login' element={<LogIn/>} />
 <Route path='/signup' element={<SignUp/>} />
 <Route path='/cart/:ProductId' element={<Cart/>}/>
  <Route path='/cart' element={<Cart/>}/>
 <Route path='ProductInfo/:ProductId' element={<ProductInfo/>}/>
 <Route path='buyingpage/:ProductId' element={<BuyingPage/>}/>
  
  </Routes>
 <Footer/>
 </BrowserRouter>
</>
</CartProductContext.Provider>
 

  )
   
};




export default App;
