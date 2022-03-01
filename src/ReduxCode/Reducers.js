import { createSlice ,current } from '@reduxjs/toolkit';

export const ProductTypeSlice =createSlice({
    name:'productType',
    initialState:{
        value:'laptops'
    },
    reducers:{
        changeProductType:(state,action) => {return {value:action.payload}}
    }

});

export const UserAuthSlice=createSlice({
    name:'authContext',
    initialState:{
        value:false,
        userData:{}
    },
    reducers:{
        changeUserAuth:(state,action) => {return {...state,value:action.payload}},
        modifyUserData:(state,action)=>{
            return {...state,value:action.payload}
        }
    }
})

export const PrevCartDataSlice=createSlice({
    name:'cartData',
    initialState:{
        prevCartData:[],
        totalPrice:'0',
        countObj:{}
    },
    reducers:{
        updateCartData:(state,action) => { return {...current(state), prevCartData:[...current(state.prevCartData) ,action.payload] }},
        
        updatePrice:(state,action)=>{ 
            return {    ...current(state) , totalPrice: action.payload.totalPrice ,
             countObj:{ ...current(state.countObj) ,[action.payload.countObj.id]:action.payload.countObj.count} 
            } 
        },
        removeCartData:(state,action) => {
            return  { ...current(state) ,prevCartData:current(state).prevCartData.filter(data => data._id !== action.payload )}
         }
    }

})

export const {changeProductType}=ProductTypeSlice.actions;
export const {changeUserAuth,modifyUserData}=UserAuthSlice.actions;
export const {updateCartData,updatePrice,removeCartData}=PrevCartDataSlice.actions;
