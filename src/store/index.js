import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer, shopReducer, shoppingCartReducer, appReducer } from "../reducers";
import thunk from "redux-thunk";

export default configureStore({
    reducer: {
        shop: shopReducer,
        favorites: favoritesReducer,
        shoppingCart: shoppingCartReducer,
        home: appReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
