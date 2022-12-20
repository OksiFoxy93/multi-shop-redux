import { createSlice } from "@reduxjs/toolkit";

import { getArrInLocalStorage } from "../helpers/localStorage";

const initialState = {
    favoriteProducts: getArrInLocalStorage("favoriteProducts"),
    notification: false
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavoriteProducts: (state, { payload }) => {
            state.favoriteProducts = [...payload];
        },
        setNotification: (state, { payload }) => {
            state.notification = payload;
        },
    }
});

export const { setFavoriteProducts, setNotification } = favoritesSlice.actions;

export const toggleFavoriteProduct = product => dispatch => {
    if (localStorage.getItem("favoriteProducts")) {
        // if the array with favorites is in local storage
        const allFavoriteProducts = [...JSON.parse(localStorage.getItem("favoriteProducts"))];
        const isFavoriteProduct = allFavoriteProducts.some(item => item.id === product.id);

        if (isFavoriteProduct) {
            // if product already added to favorite list - remove product
            const newListFavoriteProducts = allFavoriteProducts.filter(items => items.id !== product.id)
            newListFavoriteProducts.length === 0 ?
                localStorage.removeItem('favoriteProducts') :
                localStorage.setItem('favoriteProducts', JSON.stringify(newListFavoriteProducts))
            dispatch(setFavoriteProducts(newListFavoriteProducts));
        } else {
            // added product to favorite list
            allFavoriteProducts.unshift(product);
            localStorage.setItem('favoriteProducts', JSON.stringify(allFavoriteProducts));
            dispatch(setFavoriteProducts(allFavoriteProducts));
            dispatch(setNotification(true));
            setTimeout(() => dispatch(setNotification(false)), 1500);
        }
    } else {
        // if the array with favorites not exist in local storage - initial state
        const allFavoriteProducts = [];
        allFavoriteProducts.push(product)
        localStorage.setItem('favoriteProducts', JSON.stringify(allFavoriteProducts))
        dispatch(setFavoriteProducts(allFavoriteProducts));
        dispatch(setNotification(true));
        setTimeout(() => dispatch(setNotification(false)), 1500);
    }
}

export default favoritesSlice.reducer;
