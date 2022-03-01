import { configureStore } from '@reduxjs/toolkit';
import {CartDataReducer, ProductTypeReducer ,UserAuthReducer} from './Actions';


 const store=configureStore({
    reducer:{
      productType:ProductTypeReducer,
      userAuth:UserAuthReducer,
      cartData:CartDataReducer   
    }
});

export default store