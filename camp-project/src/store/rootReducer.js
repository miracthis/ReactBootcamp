//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({

    cart : cartReducer,

})

//Const kullandığımız için altta yazdık.
export default rootReducer;