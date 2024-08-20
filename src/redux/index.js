import {configureStore} from "@reduxjs/toolkit";
import all from "./all/all"
import skin from "./skin/skin"
import sets from "./sets/sets"
import lip from "./lip/lip"
import auth from "./auth/auth"
import cart from "./cart/cart"
export const store = configureStore({
    reducer:{
        all,
        skin,
        sets,
        lip,
        auth,
        cart,
    }
});