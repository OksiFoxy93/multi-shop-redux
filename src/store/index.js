import { configureStore } from "@reduxjs/toolkit";
import {
    favoritesReducer,
    shopReducer,
    shoppingCartReducer,
    appReducer,
    productDetailsReducer,
    categoryReducer
} from "../reducers";
import thunk from "redux-thunk";

export default configureStore({
    reducer: {
        shop: shopReducer,
        favorites: favoritesReducer,
        shoppingCart: shoppingCartReducer,
        home: appReducer,
        productDetails: productDetailsReducer,
        category: categoryReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
