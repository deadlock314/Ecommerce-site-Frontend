import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import LogIn from './Components/authComponent/LogIn';
import SignUp from './Components/authComponent/SignUp'
import ProductInfo from './Components/ProductComponent/ProductInfo';
import Products from './Components/ProductComponent/Products';
import Cart from './Components/CartComponents/Cart';
import BuyingPage from './BuyingPageComponent/BuyingPage';
import './Styles/globalStyles.css';
import Footer from './Components/Footer';

function App() {
  return (

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

  )
   
};




export default App;
