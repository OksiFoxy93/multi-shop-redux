import { createSlice } from "@reduxjs/toolkit";

import { sendRequest } from "../helpers/sendRequest";
import { API } from "../config/api";

const initialState = {
    productItems: [],
    isFetching: false,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        getProductItems: (state, action) => {
            state.productItems = [...action.payload];
        },
        isFetching: (state, action) => {
            state.isFetching = action.payload;
        }
    }
});

export const { getProductItems, isFetching } = categorySlice.actions;

export const fetchCategoryProductItems = category => dispatch => {
    dispatch(isFetching(true));
    return sendRequest(`${API}/products/category/${category}`)
        .then( results => {
            dispatch(getProductItems(results));
            dispatch(isFetching(false));
        });
};

export default categorySlice.reducer;
