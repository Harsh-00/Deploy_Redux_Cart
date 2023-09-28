import { configureStore } from "@reduxjs/toolkit";
import CartSlicee from "./slices/CartSlicee";

export const store = configureStore({
	reducer: {
		cart: CartSlicee,
	},
});
