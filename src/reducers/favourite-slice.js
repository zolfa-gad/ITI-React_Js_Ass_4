import { createSlice } from "@reduxjs/toolkit";

let favouriteSlice = createSlice({
  name: "favourite",
  initialState: { list: [] },
  reducers: {
    addProduct: (state, action) => {
      if (state.list.find(({ id }) => id === action.payload.id) === undefined) {
        state.list = [...state.list, action.payload];
      }
    },

    removeProduct: (state, action) => {
      let foundItem = state.list.filter(({ id }) => id !== action.payload.id);
      state.list = [...foundItem];
    },
  },
});

export let { addProduct, removeProduct } = favouriteSlice.actions;
export default favouriteSlice.reducer;
