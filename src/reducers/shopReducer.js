import { createSlice } from "@reduxjs/toolkit";

import { sendRequest } from "../helpers/sendRequest";
import { GET_ALL_PRODUCTS } from "../config/api";

const initialState = {
    productItems: [],
    isFetching: false,
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        getProductItems: (state, { payload }) => {
            state.productItems = [...payload];
        },
        isFetching: (state, { payload }) => {
            state.isFetching = payload;
        }
    }
});

export const { getProductItems, isFetching } = shopSlice.actions;

export const fetchProductItems = () => dispatch => {
    dispatch(isFetching(true));
    return sendRequest(GET_ALL_PRODUCTS)
        .then( results => {
            dispatch(getProductItems(results));
            dispatch(isFetching(false));
        });
};

export default shopSlice.reducer;
