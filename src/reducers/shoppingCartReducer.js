import { createSlice } from "@reduxjs/toolkit";
import { getArrInLocalStorage } from "../helpers/localStorage";

const initialState = {
    productsInCart: getArrInLocalStorage("productsInCart"),
};

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        setProductsInCart: (state, { payload }) => {
            state.productsInCart = [...payload];
        },
    }
});

export const { setProductsInCart } = shoppingCartSlice.actions;

export const removeProduct = product => dispatch => {
    const allProductsInCart = [...JSON.parse(localStorage.getItem("productsInCart"))];
    const newListProductsInCart = allProductsInCart.filter(items => items.id !== product.id);
    newListProductsInCart.length === 0 ?
        localStorage.removeItem('productsInCart') :
        localStorage.setItem('productsInCart', JSON.stringify(newListProductsInCart));
    dispatch(setProductsInCart(newListProductsInCart));
};

export const addProduct = product => dispatch => {
    if (localStorage.getItem("productsInCart")) {
        const allProductsInCart = [...JSON.parse(localStorage.getItem("productsInCart"))];
        allProductsInCart.unshift(product);
        localStorage.setItem('productsInCart', JSON.stringify(allProductsInCart));
        dispatch(setProductsInCart(allProductsInCart));
    } else {
        const allProductsInCart = [];
        allProductsInCart.push(product);
        localStorage.setItem('productsInCart', JSON.stringify(allProductsInCart));
        dispatch(setProductsInCart(allProductsInCart));
    }
}

export default shoppingCartSlice.reducer;
