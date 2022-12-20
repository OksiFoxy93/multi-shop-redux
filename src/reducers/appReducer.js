import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentProduct: {},
    isShowModal: false,
    activeModal: "addToCartModal"
};

const appSlice = createSlice({
    name:"app",
    initialState,
    reducers: {
        setCurrentProduct: (state, { payload }) => {
            state.currentProduct = { ...payload }
        },
        showModal: (state, { payload }) =>{
            state.isShowModal = payload;
        },
        setActiveModal: (state, { payload }) =>{
            state.activeModal = payload;
        }
    }
})

export const { setCurrentProduct, showModal, setActiveModal } = appSlice.actions;

export default appSlice.reducer;
