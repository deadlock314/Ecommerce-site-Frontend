import { ProductTypeSlice ,UserAuthSlice,PrevCartDataSlice} from './Reducers';

const ProductTypeReducer=ProductTypeSlice.reducer;
const UserAuthReducer=UserAuthSlice.reducer;
const CartDataReducer=PrevCartDataSlice.reducer;
export  {ProductTypeReducer,UserAuthReducer,CartDataReducer} ;
