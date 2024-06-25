import { configureStore } from "@reduxjs/toolkit";
import cartRreducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartRreducer,
  },
});

export default appStore;
