import { createSlice } from "@reduxjs/toolkit";

let favouriteSlice = createSlice({
  name: "favourite",
  initialState: { list: [] },
  reducers: {
    addProduct: (state) => {
      state.list.push({
        image: "cvjdvh",
        price: "jsdhfj",
      });
    },
    removeProduct: (state) => {
      state.list.push({
        image: "cvjdvh",
        price: "jsdhfj",
      });
    },
  },
});

export let { addProduct, removeProduct } = favouriteSlice.actions;
export default favouriteSlice.reducer;
