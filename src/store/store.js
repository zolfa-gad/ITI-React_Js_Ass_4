import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite-slice";

let favouriteStore = configureStore({
  reducer: { favourite: favouriteReducer },
});
export default favouriteStore;
