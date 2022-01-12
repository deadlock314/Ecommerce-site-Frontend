import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import LogIn from './Components/authComponent/LogIn';
import SignUp from './Components/authComponent/SignUp'
import ProductInfo from './Components/ProductInfo';
import Products from './Components/Products';
import Cart from './Components/Cart';
import './Styles/globalStyles.css'


function App() {
  return (

 <BrowserRouter>
 <NavBar/> 
 <Routes>
 <Route path='/' element={<Products/>}/>
 <Route path='/login' element={<LogIn/>} />
 <Route path='/signup' element={<SignUp/>} />
 <Route path='/cart' element={<Cart/>}/>
 <Route path='ProductInfo/:ProductId' element={<ProductInfo/>}/>
 </Routes>
 </BrowserRouter>

  )
   
};




export default App;
