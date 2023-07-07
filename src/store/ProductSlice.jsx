import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showProduct(state, actions) {
      state.data = actions.payload;
    },
  },
});

export const { showProduct } = productSlice.actions;
export default productSlice.reducer;
