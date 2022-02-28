import { createSlice } from '@reduxjs/toolkit';


export const ProductTypeSlice =createSlice({

    name:'productType',
    initialState:{
        value:'laptops'
    },
    reducers:{
        changeProductType:(state,action) => {return {value:action.value}}
    }

});

export const UserAuthSlice=createSlice({
    name:'authContext',
    initialState:{
        value:false,
        userData:{}
    },
    reducers:{
        changeUserAuth:(state,action) => {return {...state,value:action.value}},
        modifyUserData:(state,action)=>{
            return {...state,value:action.value}
        }
    }

})

export const {changeProductType}=ProductTypeSlice.actions;
export const {changeUserAuth,modifyUserData}=UserAuthSlice.actions;