import { configureStore } from '@reduxjs/toolkit';
import {ProductTypeReducer ,UserAuthReducer} from './Actions';


 const store=configureStore({
    reducer:{
      productType:ProductTypeReducer,
      userAuth:UserAuthReducer
       
    }
});

export default store