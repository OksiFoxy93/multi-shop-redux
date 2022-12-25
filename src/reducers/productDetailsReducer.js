import { createSlice } from "@reduxjs/toolkit";

import { sendRequest } from "../helpers/sendRequest";
import { API } from "../config/api";

const initialState = {
    product: {},
    isFetching: false,
};

const productDetailsSlice = createSlice({
    name:"productDetails",
    initialState,
    reducers: {
        getProduct: (state, { payload }) => {
            state.product = { ...payload };
        },
        isFetching: (state, { payload }) => {
            state.isFetching = payload;
        }
    }
});

export const { getProduct, isFetching } = productDetailsSlice.actions;

export const fetchProductDetails = id => dispatch => {
    dispatch(isFetching(true));
    return sendRequest(`${API}/products/${id}`)
        .then( results => {
            dispatch(getProduct(results));
            dispatch(isFetching(false));
        });
};

export default productDetailsSlice.reducer;
